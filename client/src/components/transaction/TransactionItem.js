import React, {Fragment, useEffect} from 'react';
import propTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Moment from 'react-moment';
import {connect} from 'react-redux';

const TransactionItem = ({
  transaction: { _id, user_id, total, menu, date },
  count: no
}) => { 
  //console.log(menu)
  return(
    <div className="sub-trans bg-white">
      <div className="center">
          <h2><span>{no}</span></h2>
      </div>
      <div>
        <p><strong>{_id}</strong></p>
        <br/>
        {menu.map(item => (
          <div className="sub-item">
              <div>{item.name}</div>
              <div>
                {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(item.price)}
              </div>
              <div>{item.amount}</div>
            </div>
          ))}

      </div>
      <div className="center">
        <h2>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(total)}</h2>
      </div>
      <div className="center">
          <Moment format='DD-MM-YYYY HH:mm:ss'>{date}</Moment>
      </div>
      
    </div>
    )};

const mapStateToProps= state => ({
    auth: state.auth
});

export default connect(
  mapStateToProps, 
  null
)(TransactionItem);