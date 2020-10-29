import React, {Fragment, useEffect} from 'react';
import TemporaryDrawer from './Navbar/Navbar';
import SelectUser from '../../View/Grupo4/SelectUser'

const ContainerSelect = () => {

    useEffect(() => {
        fetch('http://localhost:8080').then(res => console.log(res.data))
    }, [])

    return(
        <Fragment>

            <div className="navbar">
                <TemporaryDrawer />
            </div>
            <SelectUser/>

        </Fragment>
        
    )
}

export default ContainerSelect;