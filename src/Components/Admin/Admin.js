import React from 'react';
import '../../CSS/App.css';
import AppBar from "../../Bar/AppBar";
import Cookies from 'universal-cookie';

const cookies = new Cookies();
class Admin extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  componentDidMount(){
    if(!cookies.get('nombreusuario')){
        window.location.href="./";
    }
  }
  render() {
    return (
      <div>
        <AppBar/>
        admin
      </div>
    );
  }
}
export default Admin;