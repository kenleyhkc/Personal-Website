import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import './Skills.css'

const ExpansionPanel = withStyles({
    root: {
      border: '1px solid blue',
      boxShadow: 'none',
      '&:not(:last-child)': {
        borderBottom: 0,
      },
      '&:before': {
        display: 'none',
      },
      '&$expanded': {
        margin: 'auto',
      },
    },
    expanded: {},
  })(MuiExpansionPanel);
  
  const ExpansionPanelSummary = withStyles({
    root: {
      backgroundColor: 'white',
      borderBottom: '1px solid red',
      marginBottom: -1,
      minHeight: 50,
      '&$expanded': {
        minHeight: 100,
      },
    },
    content: {
      '&$expanded': {
        margin: '12px 0',
      },
    },
    expanded: {},
  })(MuiExpansionPanelSummary);
  
  const ExpansionPanelDetails = withStyles(theme => ({
    root: {
      padding: theme.spacing(2),
    },
  }))(MuiExpansionPanelDetails);
  
  export default function Skills() {
    const [expanded, setExpanded] = React.useState('panel1');
  
    const handleChange = panel => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
    };
  
    return (
        <section id="skills" className="section">
      <div className="sectionContent">
        <ExpansionPanel square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography>Lanaguages</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
                JavaScript
                Java
                C++
                Python
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <ExpansionPanelSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography>Frontend</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
                React.js
                Redux
                Gatsby
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <ExpansionPanelSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography>Backend</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Node.js
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
      </section>
    );
  }
