import React, { useState } from 'react'
import Navbar from '../../components/navfoot/Navbar/Navbar'
import "./Activities.css"
import Footer from '../../components/Home/Footer/Footer'
import Cards from '../../components/Card/Cards'
import data from '../Activities/data'
import { InputLabel, Select, Typography, makeStyles, FormControl,TextField } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(2),
        minWidth: 120,
    },

}));

const classes = useStyles;
const Activities = () => {
    
    const [search, setsearch] = useState("");
    const [info ,setinfo] = useState(data) ; 

    function handlesearch(value) {

        setsearch(value) ; 
        setinfo( info.filter(
            (inf) =>
              inf.name.includes(search) 
          ))
      }
 
    return (
        <div>
            <Navbar />
            <div>
            </div>
            <div className='heading-div'>
                <Typography variant='h3'>
                    EVENTS
                    <div className='rect'>
                    </div>
                </Typography>
            </div>
            <div className='search-bar'>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="age-native-simple">Event</InputLabel>
                    <Select
                        native
                    >
                        <option aria-label="None" value="" />
                        <option >EVENTS</option>
                        <option >EVENTS</option>
                        <option >EVENTS</option>
                    </Select>
                </FormControl>

                <TextField label="Search ..." variant='outlined' onChange={ (e) => handlesearch(e.target.value)}
                    style={{width: "20%" , outerHeight: "80%" }}></TextField>

            </div>
            <div className='line'>
            </div>

            <div className='events'>
                <Cards info={info} />
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default Activities