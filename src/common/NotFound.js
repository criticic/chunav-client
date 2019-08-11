import React, { Component } from 'react';
import './NotFound.css';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

class NotFound extends Component {
    render() {
        return (
            <div className="page-not-found">
                <div className="row">
                  <div className="col-sm-12 ">
                     <div className="col-sm-10 col-sm-offset-1  text-center">
                        <div className="four_zero_four_bg">
                           <h1 className="text-center ">404</h1>
                        </div>
                        <div class="contant_box_404">
                           <h3 class="h2">
                              Look like you're lost
                           </h3>
                           <p>the page you are looking for not available!</p>
                           <Link to="/">
                           <Button className="go-back-btn" type="primary" size="large">Go Back</Button></Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

        );
    }
}

export default NotFound;