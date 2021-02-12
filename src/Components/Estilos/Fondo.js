import React from 'react';
import '../../CSS/App.css';
import Card from '../Card/Card';
import moment from 'moment';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ccolor: 1,
            count: 0,
            county: 0,
            countz: 0,
        }
    }
    componentDidMount() {
        this.myInterval = setInterval(() => {
            this.setState({
                ccolor: this.state.ccolor + 1
            })
            if (this.state.ccolor <= 22) {

                if ((this.state.count == 0) && (this.state.county != 0) && (this.state.county == this.state.countz)) {
                    this.setState({
                        county: 0
                    })
                } else {
                    this.setState({
                        count: this.state.count + 85
                    })
                    this.props.seleccionarCFondo(this.state.ccolor)
                }
            }

        }, 1000);
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.ccolor <= 22) {
            if (this.state.count != prevState.count) {
                this.change(this.state.ccolor);
            }
            if ((this.state.county >= 256) && (this.state.countz >= 256)) {
                this.setState({
                    county: 0,
                    countz: 0
                })
            }
            if (this.state.count >= 256) {
                this.setState({
                    count: 0,
                    county: this.state.county + 85,
                    countz: this.state.countz + 85
                })
            }
        }
    }
    componentWillUnmount() {
        clearInterval(this.myInterval)
    }
    change(ccolor) {
        if (ccolor == 21) {
            ccolor = ccolor + 1;
        }
        if (ccolor <= 21) {
            var x = Math.floor(this.state.count); // range is 0-255
            var y = Math.floor(this.state.county);
            var z = Math.floor(this.state.countz);
            var thergb = "rgb(" + x + "," + y + "," + z + ")";
            this.setState({
                thergb
            })
        } else {
            var thergb = "rgb(" + 255 + "," + 255 + "," + 255 + ")";
            this.setState({
                thergb
            })
        }

    }
    render() {
        const { count, county, countz } = this.state
        return (
            <div >
                <header
                    style={{
                        background: this.state.thergb,
                    }}
                    className="App-header"
                >
                    {/* {this.state.ccolor}
                    <br></br>
                    {count}
                    <br></br>
                    {county}
                    <br></br>
                    {countz} */}
                    <>
                        {/* <Card
              contenido={this.state.contenidos}
              // contenido={obj}
              // contenido={temp}
              count={this.state.count}
            /> */}
                    </>

                </header>
            </div>
        );
    }
}
export default App;
