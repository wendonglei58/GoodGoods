import React from 'react';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Menu from "./layout/Menu";
import  EnhancedTable from "./layout/EnhancedTable";

const App = () => (
    <div>
        <div style={{float: 'right'}}>
            <AmplifySignOut />
        </div>
        <div style={{float: 'left'}}>
            <Menu />
        </div>
        <div style={{float: 'right'}}>
            <EnhancedTable/>
        </div>

    </div>
);

export default withAuthenticator(App);