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
            <tr>
                <th>{this.props.job.id}</th>
                <th>{this.props.job.product_name}</th>
                <th>{this.props.job.runs}</th>
                <th>{this.props.job.status}</th>
                <th>{this.props.job.activity_name}</th>
                <th>{new Date(this.props.job.end_date * 1000).toUTCString()}</th>
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
            <GridRow job={j} key={j.id}/>
        ));
        return (
            <div>
                <Button onClick={this.getJobs}>Get jobs</Button>
                <Table responsive>
                    <thead>
                    <tr>
                        <SortableHeader sortBy="id">ID</SortableHeader>
                        <SortableHeader sortBy="product">Product</SortableHeader>
                        <SortableHeader sortBy="runs">Runs</SortableHeader>
                        <SortableHeader sortBy="status">Status</SortableHeader>
                        <SortableHeader sortBy="activity">Activity</SortableHeader>
                        <SortableHeader sortBy="end_date">End date</SortableHeader>
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