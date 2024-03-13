import {
    React,
    Component
} from 'react';


export default class ProposalRow extends Component {

    render() {

        return (


            <li className='content-heading'>
                <span className='content-heading'>{this.props.heading}</span>

                {this.props.textRows}


            </li>


        );

    }

}



