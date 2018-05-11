import * as React from "react";
import {Button, Table} from "reactstrap";
import {AppState} from "../state/store";
import {connect} from "react-redux";
import {Job} from "../schema/job";
import {getJobs} from "../auth/login";

interface SortableHeaderProps {
    children: string;
    sortBy: string;
}

class SortableHeader extends React.Component {
    props: SortableHeaderProps;
    sort = () => {
        console.log(this.props.sortBy);
    };

    render() {
        return (
            <th onClick={this.sort} style={{cursor: "pointer"}}>
                {this.props.children}
            </th>
        );
    }
}

interface JobRowProps {
    job: Job;
}

class GridRow extends React.Component {
    props: JobRowProps;

    render() {
        return (
            <tr key={this.props.job.id}>
                <th>{this.props.job.product}</th>
                <th>{this.props.job.runs}</th>
                <th>{this.props.job.activity}</th>
            </tr>
        );
    }
}

interface JobsProps {
    list: Job[];
}

const mapStateToProps = (state: AppState) => {
    const {list} = state.jobs;

    return {list};
};

class Jobs extends React.Component {
    props: JobsProps;

    getJobs = () => {
        getJobs();
    };

    render() {
        const rows = this.props.list.map(j => (
            <GridRow job={j}/>
        ));
        return (
            <div>
                <Button onClick={this.getJobs}>Get jobs</Button>
                <Table responsive>
                    <thead>
                    <tr>
                        <SortableHeader sortBy="product">Product</SortableHeader>
                        <SortableHeader sortBy="runs">Runs</SortableHeader>
                        <SortableHeader sortBy="activity">Activity</SortableHeader>
                    </tr>
                    </thead>
                    <tbody>
                    {rows}
                    </tbody>
                </Table>
            </div>
        );
    }
}

const connected = connect<{}, {}, JobsProps>(mapStateToProps)(Jobs);

export default connected;