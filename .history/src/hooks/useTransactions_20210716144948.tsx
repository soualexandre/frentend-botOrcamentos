import {createContext, useEffect, useState, ReactNode, useContext} from 'react';
import { api } from "../services/api";


interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
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
    console.log(transaction)
   async function createTransaction(transactionInput: TransactionInput){
      const response = await api.post('/transactions', {
        ...transactionInput,
        createdAt: new Date(),
    })
      const {transaction} = response.data;

    console.log(transactions);
    
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