import React from 'react'
import cars from '../cars.json'
import { makeStyles } from '@material-ui/core/styles';
import { Container, Paper, Chip, Typography } from '@material-ui/core';

const Car = (props) => {
    let carId = props.match.params.id
    let aCar = cars.find(item => item.id == carId);

    const useStyles = makeStyles((theme) => ({
        root: {
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          listStyle: 'none',
          padding: theme.spacing(0.5),
          marginTop: '20px',
        },
        chip: {
            display: 'flex',
            margin:10,
            padding: theme.spacing(0.5),
        },
      }));

    const classes = useStyles();

    const [chipData] = React.useState([
        { key: 0, label: "Name: " + aCar.Acceleration },
        { key: 1, label: "Cylinders: " + aCar.Cylinders },
        { key: 2, label: "Displacement: " + aCar.Displacement },
        { key: 3, label: "Horsepower: " + aCar.HorsePower },
        { key: 4, label: "MPG: " + aCar.Miles_per_Gallon },
        { key: 5, label: "Origin: " + aCar.Origin },
        { key: 6, label: "Weight: " + aCar.Weight_in_lbs },
        { key: 7, label: "Year: " + aCar.Year },
    ]);
      

    return (
        <Container maxWidth="sm" className={classes.root}>
            <Paper >
            <Typography 
           style={{textTransform: 'uppercase'}}
            component="div"
            align="center"
            variant="h2"
            alignCenter="true"
            >
                {aCar.Name}
            </Typography>
                {chipData.map((data) => {
                    return (
                        <li key={data.key}>
                        <Chip
                        size="small"
                        label={data.label}
                        className={classes.chip}
                        />
                    </li>
                    );
                })}
            </Paper>
        </Container>
    )
}

export default Car