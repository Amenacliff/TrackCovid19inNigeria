import React, { Component } from 'react'
import './result.css'
import {FaHospital, FaSync , FaSadTear} from 'react-icons/fa';
import {MdFiberNew} from 'react-icons/md'


export class index extends Component {
    constructor(){
        super();
        this.state={
            totalCase: '',
            newCase: '',
            newRecovered : '',
            newDeaths : '',
            totalDeaths : '',
            totalRecovered : ''

        }
    }

     callApi =()=>{
        fetch('https://api.covid19api.com/summary')
            .then((res)=>res.json())
            .then((data)=>{
                const localResult = data.Countries.find(count => count.Country === 'Nigeria')
                const totalCases = localResult.TotalConfirmed
                const newCases = localResult.NewConfirmed
                const NewRecovered  =  localResult.NewRecovered
                const NewDeaths = localResult.NewDeaths
                const TotalDeaths = localResult.TotalDeaths
                const TotalRecovered = localResult.TotalRecovered 
                
                this.setState(
                    {
                    totalCase: totalCases,
                    newCase : newCases,
                    newRecovered : NewRecovered,
                    newDeaths : NewDeaths,
                    totalDeaths: TotalDeaths,
                    totalRecovered : TotalRecovered
                    }
                )
            })
            
        }

        

    render() {
        const {totalCase, newCase, newRecovered , newDeaths , totalDeaths ,totalRecovered} = this.state
        return (

            <div>
                <h4 className='introtext'>Below are the Current Number of Cases in Nigeria</h4><br/><br/>
                <div className='totalc'>
        <FaHospital className='hospital'/><h3>(Total Cases) : </h3> <h3>{totalCase}</h3>
                </div><br/><br/>
                <div className='newc'>
        <MdFiberNew className='hospital'/><h3>(New Cases) : </h3> <h3>{newCase}</h3>
                </div><br/><br/>
                <div className='newRecc'>
        <FaSync className='hospital'/><h3>(New Recovered) : </h3> <h3>{newRecovered}</h3>
                </div><br/><br/>
                <div className='totalre'>
        <FaSync className='hospital'/><h3>(Total Recovered) : </h3> <h3>{totalRecovered}</h3>
                </div><br/><br/>
                <div className='totald'>
        <FaSadTear className='hospital'/><h3>(Total Deaths) : </h3> <h3>{totalDeaths}</h3>
                </div><br/><br/>
                <div className='totald'>
        <FaSadTear className='hospital'/><h3>(New Deaths) : </h3> <h3>{newDeaths}</h3>
                </div><br/><br/>
                <button className='btn' onClick={this.callApi}>Click me to see Results</button><br/><br/><br/><br/><br/>
            </div>
        )
    }

}


export default index
