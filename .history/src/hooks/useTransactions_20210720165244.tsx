import {createContext, useEffect, useState, ReactNode, useContext} from 'react';
import { api } from "../services/api";
import { toast } from 'react-toastify';


interface Transaction {
    id: number;
    client: string;
    seller: string;
    description: string;
    created_at: string;
    budget_amount: number;
}
interface TransactionsContextData{
    transactions: Transaction[];
    createTransaction: (transaction:TransactionInput) => Promise<void>;
    deleteTransaction: (productId: number) => void;
}

type TransactionInput = Omit<Transaction, 'id' | 'created_at'>;

interface TrabsactionsProviderProps{
    children: ReactNode;
}
 const TransactionsContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData
    );


export function TransacticionsProvider({children} : TrabsactionsProviderProps){
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    

   async function createTransaction(transactionInput: TransactionInput){
      const response = await api.post('/budget/create', {
        ...transactionInput,
    })
    console.log(response.data)
    setTransactions([
        response.data,
        ...transactions
    ])
   
    }
    async function deleteTransaction(productId: number){
       const response =  await api.delete(`/budget/delete/${productId}`)
        setTransactions(response.data)
        toast.success('Orçamento removido com sucesso');
    }

    useEffect(() => {
        api.get('budget')
            .then(response => setTransactions(response.data))
    },[])

    return ( 
        <TransactionsContext.Provider value={{transactions, createTransaction, deleteTransaction}}>
            {children}
        </TransactionsContext.Provider>
    );
}

export function useTransactions(){
    const context = useContext(TransactionsContext);
    return context;
}