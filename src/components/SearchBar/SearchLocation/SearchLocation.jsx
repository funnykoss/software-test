import React from 'react'
import s from './SearchLocation.module.css'
import { GrMapLocation } from 'react-icons/gr'
import Input from '../../Input/Input'
 import locationList from '../../../JSON/locationList.json'

const SearchLocation = ({value,
   changeSelect}) => {
    return (
      <div className={s.inputThumb}>
        <GrMapLocation className={s.icn}/>
            <Input
                value={value}
                langs={locationList}
                onChange={changeSelect}
                color='#98A7B3'
         /> 
     </div>
        
    )
}

export default SearchLocation