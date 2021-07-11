import React, {Fragment, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import propTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import Transaction from './TransactionItem';
import {connect} from 'react-redux';
import { getTransactions } from '../../actions/transactions';
import Pagination from "react-js-pagination";

const Transactions = (
    {
        getTransactions, transaction: {transactions, loading}
    }
    ) => {
        const [todos, setTodos] = useState(transactions);
        const [currentPage, setCurrentPage] = useState();
        const [todosPerPage, setTodosPerPage] = useState();
        const [currentTodos, setCurrentTodos] = useState([]);

        // Logic for displaying todos
        const getCurrentTodos = () => {
            const indexOfLastTodo = currentPage * todosPerPage;
            const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
            setCurrentTodos(todos.slice(indexOfFirstTodo, indexOfLastTodo))
        }

        let count=0;
        let thisPage=1;
        const renderTodos = currentTodos.map((transaction) => {
            if(thisPage!=currentPage){
                count=count+1+((currentPage-1)*todosPerPage);
                thisPage=currentPage;
            }else{
                count=count+1;
            }
            //count=count+1+((thisPage-1)*todosPerPage);
            //console.log(thisPage+" "+currentPage)
            return <Transaction key={transaction._id} transaction={transaction} count={count} />;
        });

        const handlePageChange = (pageNumber) => {
            //console.log(`active page is ${pageNumber}`);
            setCurrentPage(pageNumber);
        }

        //console.log(todos)
        useEffect(()=>{
            getTransactions();
            setCurrentPage(1);
            setTodosPerPage(3);
            setTodos(transactions);
        }, [loading, getTransactions]);

        useEffect(()=>{
            getCurrentTodos();
        }, [todos]);

        useEffect(()=>{
            getCurrentTodos();
        }, [currentPage]);

        return loading ? (
            <Spinner />
        ) : (
            <Fragment>
                <div className="parent-menu trans">
                    <div className="transactions">
                        <div className="sub-trans top-trans bg-white center">
                            <div>
                                <h3>No</h3>
                            </div>
                            <div>
                                <h3>Transaction Number</h3>
                            </div>
                            <div>
                                <h3>Total Price</h3>
                            </div>
                            <div>
                                <h3>Date Transaction</h3>
                            </div>
                        </div>
                        {renderTodos}
                    </div>
                </div>
                <Pagination
                activePage={currentPage}
                itemsCountPerPage={todosPerPage}
                totalItemsCount={todos.length}
                pageRangeDisplayed={3}
                onChange={handlePageChange}
                />
            </Fragment>
        );
};

Transactions.propTypes = {
    getTransactions: propTypes.func.isRequired,
    transaction: propTypes.object.isRequired
}

const mapStateToProps= state => ({
    transaction: state.transaction
});

export default connect(mapStateToProps, {getTransactions})(Transactions);