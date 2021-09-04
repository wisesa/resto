import React, {Fragment, useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import propTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import Appetizer from './Appetizer';
import Maincourse from './Maincourse';
import MenuItem from './MenuItem';
import Dessert from './Dessert';
import {connect} from 'react-redux';
import {getAppetizers} from '../../actions/menu';
import {getMaincourses} from '../../actions/menu';
import {getDesserts} from '../../actions/menu';
import { getMenu } from '../../actions/menu';

const Order = (

    {
        getAppetizers, appetizer: {appetizers, loading},
        getMaincourses, maincourse: {maincourses},
        getDesserts, dessert: {desserts},
        getMenu,
    }
    ) => {
  
        const [minimizeChart, setMinimizeChart] = useState([]);
        const [maximizeChart, setMaximizeChart] = useState([]);
        const [totalCart, setTotalCart] = useState([0]);

        //Cart Appetizer
        const [cartAppetizer, setCartAppetizer] = useState([]);
      
        const addAppetizer = (event,index) => {
          event.preventDefault();
          if(!cartAppetizer[index]){
            console.log('Add'+index);
            setCartAppetizer([
              ...cartAppetizer,
              {
                id: index,
                amount: 1
              }
            ]);
          }else{
            console.log('Update'+index);
            
            cartAppetizer[index].amount=cartAppetizer[index].amount+1;
            setCartAppetizer(cartAppetizer);
          }
          setTotalCart(parseInt(totalCart+1));
        };
      
        const decreaseAppetizer = (event, index) => {
          event.preventDefault();
          if(cartAppetizer[index].amount>0){
            cartAppetizer[index].amount=cartAppetizer[index].amount-1;
            setCartAppetizer(cartAppetizer);
            setTotalCart(parseInt(totalCart-1));
          }
        };

        //Cart Maincourse
        const [cartMaincourse, setCartMaincourse] = useState([]);
      
        const addMaincourse = (event,index) => {
          event.preventDefault();
          if(!cartMaincourse[index]){
            console.log('Add'+index);
            setCartMaincourse([
              ...cartMaincourse,
              {
                id: index,
                amount: 1
              }
            ]);
          }else{
            console.log('Update'+index);
            
            cartMaincourse[index].amount=cartMaincourse[index].amount+1;
            setCartMaincourse(cartMaincourse);
          }
          setTotalCart(parseInt(totalCart+1));
        };
      
        const decreaseMaincourse = (event, index) => {
          event.preventDefault();
          cartMaincourse[index].amount=cartMaincourse[index].amount-1;
          setCartMaincourse(cartMaincourse);
          setTotalCart(parseInt(totalCart-1));
        };

        //Cart Dessert
        const [cartDessert, setCartDessert] = useState([]);
      
        const addDessert = (event,index) => {
          event.preventDefault();
          if(!cartDessert[index]){
            console.log('Add'+index);
            setCartDessert([
              ...cartDessert,
              {
                id: index,
                amount: 1
              }
            ]);
          }else{
            console.log('Update'+index);
            
            cartDessert[index].amount=cartDessert[index].amount+1;
            setCartDessert(cartDessert);
          }
          setTotalCart(parseInt(totalCart+1));
        };
      
        const decreaseDessert = (event, index) => {
          event.preventDefault();
          cartDessert[index].amount=cartDessert[index].amount-1;
          setCartDessert(cartDessert);
          setTotalCart(parseInt(totalCart-1));
        };

    useEffect(()=>{
        getAppetizers();
    }, [getAppetizers]);

    useEffect(()=>{
        getMaincourses();
    }, [getMaincourses]);

    useEffect(()=>{
        getDesserts();
    }, [getDesserts]);

    useEffect(() => {
      getMenu("60ca12ffed908ca010a3e7c2"); //dummy data
    
    }, [loading, getMenu]);

    return loading ? (
        <Spinner />
    ) : (
        <Fragment>
            <div className="row d-flex flex-column-xl justify-content-center mt-5">
                <div className="appetizers d-flex flex-column align-items-center center m-2">
                    <div className="d-flex justify-content-between mt-5">
                        <h2 className="dish-type mr-3">Appetizer</h2>
                    </div>
                    {appetizers.map((appetizer,index) => (
                      <div className="menu bg-white d-flex align-items-center">
                        <div>
                          <img className="img-menu" src={`http://localhost:5000/menu/${appetizer.pic}`} />
                        </div>
                        <div className="price">
                          <div>
                            <h3>
                              {appetizer.name}
                            </h3>
                            <h3>
                              {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(appetizer.price)}
                            </h3>
                          </div>
                        </div>
                        <div className="center">
                          <h3 className="my-1">
                            <input type="text" id={"appetizer-"+index} name="chk[]" value={appetizer._id+"|"+appetizer.name+"|"+appetizer.price+"|"+(cartAppetizer[index] ? cartAppetizer[index].amount : 0)} />
                            <button onClick={(event) => addAppetizer(event,index)}
                                type="button"
                                className="btn btn-danger">
                                    {<i className="fas fa-plus"></i>}
                            </button>
                            <button onClick={(event) => decreaseAppetizer(event,index)}
                                type="button"
                                className="btn btn-danger">
                                    {<i className="fas fa-minus"></i>}
                            </button>
                          </h3>
                        </div>
                      </div>
                    ))}
                </div>
                <div className="maincourses d-flex flex-column align-items-center center m-2">
                    <div className="d-flex justify-content-between mt-5">
                        <h2 className="dish-type mr-3">Main Course</h2>
                    </div>
                    {maincourses.map((maincourse,index) => (
                        <div className="menu bg-white d-flex align-items-center">
                        <div>
                          <img className="img-menu" src={`http://localhost:5000/menu/${maincourse.pic}`} />
                        </div>
                        <div className="price">
                          <div>
                            <h3>
                              {maincourse.name}
                            </h3>
                            <h3>
                              {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(maincourse.price)}
                            </h3>
                          </div>
                        </div>
                        <div className="center">
                          <h3 className="my-1">
                            <input type="text" id={"maincourse-"+index} name="chk[]" value={(cartMaincourse[index] ? cartMaincourse[index].amount : null)+" "+maincourse._id+"|"+maincourse.name+"|"+maincourse.price+"|"+maincourse.amount} />
                            <button onClick={(event) => addMaincourse(event,index)}
                                type="button"
                                className="btn btn-danger">
                                    {<i className="fas fa-plus"></i>}
                            </button>
                            <button onClick={(event) => decreaseMaincourse(event,index)}
                                type="button"
                                className="btn btn-danger">
                                    {<i className="fas fa-minus"></i>}
                            </button>
                          </h3>
                        </div>
                      </div>
                    ))}
                </div>
                <div className="desserts d-flex flex-column align-items-center center m-2">
                    <div className="d-flex justify-content-between mt-5">
                        <h2 className="dish-type mr-3">Dessert</h2>
                    </div>
                    {desserts.map((dessert,index) => (
                        <div className="menu bg-white d-flex align-items-center">
                        <div>
                          <img className="img-menu" src={`http://localhost:5000/menu/${dessert.pic}`} />
                        </div>
                        <div className="price">
                          <div>
                            <h3>
                              {dessert.name}
                            </h3>
                            <h3>
                              {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(dessert.price)}
                            </h3>
                          </div>
                        </div>
                        <div className="center">
                          <h3 className="my-1">
                            <input type="text" id={"maincourse-"+index} name="chk[]" value={(cartDessert[index] ? cartDessert[index].amount : null)+" "+dessert._id+"|"+dessert.name+"|"+dessert.price+"|"+dessert.amount} />
                            <button onClick={(event) => addDessert(event,index)}
                                type="button"
                                className="btn btn-danger">
                                    {<i className="fas fa-plus"></i>}
                            </button>
                            <button onClick={(event) => decreaseDessert(event,index)}
                                type="button"
                                className="btn btn-danger">
                                    {<i className="fas fa-minus"></i>}
                            </button>
                          </h3>
                        </div>
                      </div>
                    ))}
                </div>
            </div>
            <div className={"cart-mini "+minimizeChart} onClick={(event) => setMaximizeChart('')}>
                <div className="row">
                    <div className="col-lg-6 center mb-3">
                      <img class="img-cart" src="/img/cart.png" />
                    </div>
                    <div className="col-lg-6 center mb-3">
                      <div className="lbl-cart ">
                        {totalCart}
                      </div>
                    </div>
                </div>
            </div>
            <div className={"cart "+maximizeChart}>
                <div className="row">
                    <div className="col-lg-4 center mb-4"></div>
                    <div className="col-lg-4 center mb-4"><h3>My Cart</h3></div>
                    <div className="col-lg-4 right mb-4">
                      <div className="lbl-x" onClick={(event) => setMaximizeChart('none')}>x</div>
                    </div>
                    
                    {appetizers.map((appetizer,index) => (
                      (!cartAppetizer[index] ? null : (<div className={"col-lg-12 "+(cartAppetizer[index].amount>0 ? null : "none")}>
                      <div className="row">
                        <div className="col-lg-6 left">{appetizer.name}</div>
                        <div className="col-lg-2 center">{cartAppetizer[index] ? 'x '+cartAppetizer[index].amount : 'x 0'}</div>
                        <div className="col-lg-4 right">{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(appetizer.price)}</div>
                      </div>
                    </div>))
                    ))}
                    {maincourses.map((maincourse,index) => (
                        <div className="col-lg-12">
                          <div className="row">
                            <div className="col-lg-6 left">{maincourse.name}</div>
                            <div className="col-lg-2 center">{cartMaincourse[index] ? 'x '+cartMaincourse[index].amount : 'x 0'}</div>
                            <div className="col-lg-4 right">{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(maincourse.price)}</div>
                          </div>
                        </div>
                    ))}
                    {desserts.map((dessert,index) => (
                        <div className="col-lg-12">
                        <div className="row">
                        <div className="col-lg-6 left">{dessert.name}</div>
                        <div className="col-lg-2 center">{cartDessert[index] ? 'x '+cartDessert[index].amount : 'x 0'}</div>
                        <div className="col-lg-4 right">{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(dessert.price)}</div>
                        </div>
                        </div>
                    ))}
                </div>
            </div>
        </Fragment>
    );
};

Order.propTypes = {
    getAppetizers: propTypes.func.isRequired,
    getMaincourses: propTypes.func.isRequired,
    getDesserts: propTypes.func.isRequired,
    getMenu: propTypes.func.isRequired,
    menu: propTypes.object.isRequired,
    appetizer: propTypes.object.isRequired,
    maincourse: propTypes.object.isRequired,
    dessert: propTypes.object.isRequired
}

const mapStateToProps= state => ({
    appetizer: state.appetizer,
    maincourse: state.maincourse,
    dessert: state.dessert,
    menu:state.menu
});

export default connect(mapStateToProps, {getAppetizers,getMaincourses,getDesserts,getMenu})(Order);