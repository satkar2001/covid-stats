import React,{useState,useEffect} from 'react'
import axios from 'axios'
export default function Main() {
    useEffect(() => {
         axios.get('https://api.covid19api.com/summary').then(res=>{
             console.log(res)
         }).catch(err=>{
             console.log(err)
         })
    }, [])

    return (
        <div>
            <h1>COVID-STATS</h1>
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <table className='table table-dark'>
                        <thead>
                            <tr>
                            <th>country</th>
                            <th>confirmed</th>
                            <th>active</th>
                            <th>recovered </th>
                            <th>deaths</th>
                            </tr>
                        </thead>

                    </table>
                </div>
            </div>
        </div>
    )
}
