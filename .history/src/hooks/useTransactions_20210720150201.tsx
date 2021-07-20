import {createContext, useEffect, useState, ReactNode, useContext} from 'react';
import { api } from "../services/api";


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
        createdAt: new Date(),
    })
    const resposeBudget = response.data;
      setTransactions([
          ...transactions,
          resposeBudget,
      ])
    }

    useEffect(() => {
        api.get('budget')
            .then(response => setTransactions(response.data))
    },[])
    return ( 
        <TransactionsContext.Provider value={{transactions, createTransaction}}>
            {children}
        </TransactionsContext.Provider>
    );
}

export function useTransactions(){
    const context = useContext(TransactionsContext);
    return context;
}