import { Button, Form, FormInput, Segment } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import { ChangeEvent, useState } from "react";

interface Props{
    activity: Activity | undefined
    closeForm: () => void;
    createOrEdit: (activity: Activity) => void;
}


export default function ActivityForm({activity: selectedActivity, closeForm, createOrEdit} : Props){

const initialState = selectedActivity ?? {
    id: '',
    title: '',
    description: '',
    category: '',
    date:'',
    city: '',
    venue: ''
}

const [activity, setActivity] = useState(initialState);

function handleSubmit(){
    createOrEdit(activity);
}

function handleInputChange(event: ChangeEvent<HTMLInputElement>){
  const {name, value} =event.target;
  setActivity({...activity, [name]:value})
}



    return(
        <Segment clearing>
            <Form onSubmit={handleSubmit} autoComplete="Off">
                <FormInput placeholder="Title" value={activity.title} name='title' onChange={handleInputChange} />
                <FormInput placeholder="Description" value={activity.description} name='description' onChange={handleInputChange}/>
                <FormInput placeholder="Category" value={activity.category} name='category' onChange={handleInputChange}/>
                <FormInput placeholder="Date" value={activity.date} name='date' onChange={handleInputChange}/>
                <FormInput placeholder="City"value={activity.city} name='city' onChange={handleInputChange} />
                <FormInput placeholder="Venue" value={activity.venue} name='venue' onChange={handleInputChange}/>
                <Button floated='right' positive type='submit' basic color="olive" content="Submit"/>
                <Button onClick={closeForm} floated='right' type='button' basic color="grey" content="Cancel"/>
            </Form>
        </Segment>

    )
}