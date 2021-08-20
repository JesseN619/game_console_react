import React from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { chooseName } from '../../redux/slices/rootSlice';
import { Input } from '../sharedComponents/Input';
import { Button } from '@material-ui/core';

import { server_calls } from '../../api';

import { useGetData } from '../../custom-hooks';

interface ConsoleFormProps {
    id?:string;
    data?:{}
}

interface ConsoleState {
    name: string;
    price: string;
}

export const ConsoleForm = (props:ConsoleFormProps) => {

    const dispatch = useDispatch();
    let { consoleData, getData } = useGetData();
    const store = useStore()
    const name = useSelector<ConsoleState>(state => state.name)
    const { register, handleSubmit } = useForm({ })

    const onSubmit = (data:any, event:any) => {
        console.log(props.id)

        if( props.id!){
            server_calls.update(props.id!, data)
            console.log(`Updated: ${data} ${props.id}`)
            event.target.reset();
            // window.location.reload();
        } else {
            console.log(`Data is: ${data}`);
            console.log(`Data.release_date is: ${data.release_date}`);
            dispatch(chooseName(data.name))
            server_calls.create(data)
            // window.location.reload();
        }
    }

    return (
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="name">Console Name</label>
                    <Input {...register('name')} name="name" placeholder='Name' />
                </div>
                <div>
                    <label htmlFor="company">Company</label>
                    <Input {...register('company')} name="company" placeholder="Company"/>
                </div>
                <div>
                    <label htmlFor="price">Price</label>
                    <Input {...register('price')} name="price" placeholder="Price"/>
                </div>
                <div>
                    <label htmlFor="release_date">Release Date</label>
                    <Input {...register('release_date')} name="release_date" placeholder="Release Date"/>
                </div>
                <Button type='submit' variant="contained">Submit</Button>
            </form>
        </div>
    )
}