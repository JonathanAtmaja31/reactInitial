import React from 'react';
import './App.css';



export interface MyState {
    name: string;
    class: string;
    isAvailable: boolean;
}


export interface MyButton {
    numButton: number;
}



export class Component1 extends React.Component <any, MyState>  {
    constructor(props: any) {
        super(props);

        this.state = {
            name: "JOJO",
            class: "XI MIPA 2",
            isAvailable: true,
        };
    }

    render() {
        return (
            <div>
                <h1>Nama : {this.state.name}</h1>
                <p>Kelas : {this.state.class}</p>
                <p>Pagisiang : {this.state.isAvailable}</p>
            </div>
        )
    }
}
export default Component1;


export class Component2 extends React.Component <any, MyButton>{
    constructor(props: any){
        super(props)

        this.state = {
            numButton: 1
        }
    }

    handleClick = () => {
        console.log("button clicked...")
        this.setState({
            numButton: this.state.numButton + 1,
        });
    }

    render(): React.ReactNode {
        return (
            <button type="button" onClick={this.handleClick}>
                click me
            </button>
        )
    }
}
