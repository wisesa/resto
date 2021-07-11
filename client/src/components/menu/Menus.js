import React, {Fragment, useEffect} from 'react';
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

const Menus = (
    {
        getAppetizers, appetizer: {appetizers, loading},
        getMaincourses, maincourse: {maincourses},
        getDesserts, dessert: {desserts},
        getMenu,
    }
    ) => {

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
      getMenu("60ca12ffed908ca010a3e7c2");
    
    }, [loading, getMenu]);

    return loading ? (
        <Spinner />
    ) : (
        <Fragment>
            <div class="btn-add">
                <Link to='/addmenu'>
                    <div
                    class="btn btn-danger">
                        {<i class="fas fa-plus"></i>}
                    </div>
                </Link>
            </div>
            <div className="parent-menu">
                <div className="appetizers">
                    <h2 className="dish-type">Appetizer</h2>
                    {appetizers.map(appetizer => (
                        <Appetizer key={appetizer._id} appetizer={appetizer} />
                    ))}
                </div>
                <div className="maincourses">
                    <h2 className="dish-type">Main Course</h2>
                    {maincourses.map(maincourse => (
                        <Maincourse key={maincourse._id} maincourse={maincourse} />
                    ))}
                </div>
                <div className="desserts">
                    <h2 className="dish-type">Dessert</h2>
                    {desserts.map(dessert => (
                        <Dessert key={dessert._id} dessert={dessert} />
                    ))}
                </div>
            </div>
        </Fragment>
    );
};

Menus.propTypes = {
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

export default connect(mapStateToProps, {getAppetizers,getMaincourses,getDesserts,getMenu})(Menus);