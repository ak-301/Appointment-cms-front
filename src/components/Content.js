import React from 'react'
import { Link } from 'react-router-dom'
import { Button} from 'reactstrap';

const Content = () => {
  return (
    <div className='contentpage'>
        <div className="left">
          <h2>To check out all the orders</h2>
        <Button color='success' type='submit'><Link className="btn" to="/orders">Click here</Link></Button>
        </div>
        <div className="right">
        <h2>To create a new order</h2>
        <Button color='success' type='submit'><Link className="btn" to="/new-order">Click here</Link></Button>
        </div>
    </div>
  )
}

export default Content