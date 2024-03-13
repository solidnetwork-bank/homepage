import {
    React,
    Component
} from 'react';
import '../static/styles/link-pin.css';


export default class LinkPin extends Component {

    render() {

        if (this.props.isPinned) {
            return (
                <svg className="link-pin" viewBox="0 0 24 24" aria-hidden="true" ><g><path d="M20.235 14.61c-.375-1.745-2.342-3.506-4.01-4.125l-.544-4.948 1.495-2.242c.157-.236.172-.538.037-.787-.134-.25-.392-.403-.675-.403h-9.14c-.284 0-.542.154-.676.403-.134.25-.12.553.038.788l1.498 2.247-.484 4.943c-1.668.62-3.633 2.38-4.004 4.116-.04.16-.016.404.132.594.103.132.304.29.68.29H8.64l2.904 6.712c.078.184.26.302.458.302s.38-.118.46-.302l2.903-6.713h4.057c.376 0 .576-.156.68-.286.146-.188.172-.434.135-.59z"></path></g></svg>
            );
        } else {
            return (
                null
            );
        }

    }
}


