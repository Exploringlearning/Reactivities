import { Card, CardContent, CardHeader, CardMeta, CardDescription, Icon, Image, Button, ButtonGroup } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";

interface Props{
    activity: Activity;
}

export default function ApplicationDetails({activity}:Props){
    return(
        <Card fluid>
        <Image src={`/assets/categoryImages/${activity.category}.jpg`}/>
        <CardContent>
          <CardHeader>{activity.title}</CardHeader>
          <CardMeta>
            <span>{activity.date}</span>
          </CardMeta>
          <CardDescription>
            {activity.description}
          </CardDescription>
        </CardContent>
        <CardContent extra>
        <ButtonGroup widths={2}>
            <Button basic color="yellow" content="Edit"/>
            <Button basic color="grey" content="Cancel"/>
        </ButtonGroup>
        </CardContent>
      </Card>
    )
}