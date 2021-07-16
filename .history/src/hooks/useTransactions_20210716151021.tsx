import {createContext, useEffect, useState, ReactNode, useContext} from 'react';
import { api } from "../services/api";


interface Transaction {
    id: number;
    client: string;
    seller: string;
    description: string;
    budget_amount: string;
}
interface TransactionsContextData{
    transactions: Transaction[];
    createTransaction: (transaction:TransactionInput) => Promise<void>;
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

interface TrabsactionsProviderProps{
    children: ReactNode;
}
 const TransactionsContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData
    );


export function TransacticionsProvider({children} : TrabsactionsProviderProps){
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    useEffect(() => {
        api.get('budget')
            .then(response => setTransactions(response.data))
    },[])
   async function createTransaction(transactionInput: TransactionInput){
      const response = await api.post('/transactions', {
        ...transactionInput,
        createdAt: new Date(),
    })

      const {transaction} = response.data;

      setTransactions([
          ...transactions,
          transaction,
      ])
    }

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