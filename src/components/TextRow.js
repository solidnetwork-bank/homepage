import {
    React,
    Component
} from 'react';


export default class TextRow extends Component {

    render() {

        return (

            <p className='content-text'>
                {this.props.content}
            </p>

        );

    }

}

