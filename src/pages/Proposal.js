import {
    React,
    Component
} from 'react';
import '../static/styles/proposal.css';
import TextRow from '../components/TextRow';
import ProposalRow from '../components/ProposalRow';


export default class Proposal extends Component {

    render() {

        if (this.props.isOrder) {
            return (

                <div>

                    <p className='main-section-heading'>{this.props.heading}</p>

                    <div className='main-section-proposal'>

                        <ol className='main-section-proposal-list'>

                            {
                                this.props.data.map((proposalRow) =>
                                    <ProposalRow
                                        key={proposalRow.idx}
                                        heading={proposalRow.heading}
                                        textRows={

                                            proposalRow.textRows.map((dataRow) =>
                                                <TextRow
                                                    key={dataRow.idx}
                                                    content={dataRow.content} />
                                            )
                                        }


                                    />
                                )

                            }

                        </ol>

                    </div>

                </div>

            );
        } else {
            return (

                <div>

                    <p className='main-section-heading'>{this.props.heading}</p>

                    <div className='main-section-proposal'>

                        <ul className='main-section-proposal-un-list'>

                            {
                                this.props.data.map((proposalRow) =>
                                    <ProposalRow
                                        key={proposalRow.idx}
                                        heading={proposalRow.heading}
                                        textRows={

                                            proposalRow.textRows.map((dataRow) =>
                                                <TextRow
                                                    key={dataRow.idx}
                                                    content={dataRow.content} />
                                            )
                                        }


                                    />
                                )

                            }

                        </ul>

                    </div>

                </div>

            );
        }


    }
}




