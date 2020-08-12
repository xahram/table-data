import React, { Component } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import './Table.css'
export default class Table extends Component {
    state = {

        users: ['usman', 'ahmad', 'anees']
    }
    onToggleHandler = (e) => {
        e.stopPropagation();

        this.setState((prevState) => {
            return {
                users: prevState.users.concat((Math.random() * 100).toFixed().toString())
            }
        })
    }
    onClickHandlerForRemove = (id) => {
        const newArray = this.state.users.filter((user) => { return user !== id })
        this.setState({ users: newArray })
    }
    render() {
        let people = this.state.users.map((user, i) => {
            return <CSSTransition  transitionName="example"
                // transitionEnterTimeout={5000}
                //     transitionLeaveTimeout={3000}
                timeout={500}
               ><div onClick={(e) => {
                    e.stopPropagation()
                    this.onClickHandlerForRemove(user)
                }
                } key={i} > {user}</div ></CSSTransition>
        })
        console.log(this.state.users);
        return (
            <div >
                <button className="Button" onClick={this.onToggleHandler}>Toggle</button>
                <TransitionGroup>
                    {people}
                </TransitionGroup>

            </div >
        );
    }
}

