import { Button, Item, ItemContent, ItemDescription, ItemExtra, ItemGroup, ItemHeader, ItemMeta, Label, Segment } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity"
interface Props {

    activities: Activity[];
}

export default function ActivityList({ activities }: Props) {
    return (
        <Segment>
            <ItemGroup divided>
                {activities.map(activity => (
                    <Item key={activity.id}>
                        <ItemContent>
                            <ItemHeader as='a'>{activity.title}</ItemHeader>
                            <ItemMeta>{activity.date}</ItemMeta>
                            <ItemDescription>
                                <div>{activity.description}</div>
                                <div>{activity.city}, {activity.venue}</div>
                            </ItemDescription>
                        </ItemContent>
                        <ItemExtra>
                            <Button floated="right" content="View" color="brown" />
                            <Label basic content={activity.category} />
                        </ItemExtra>
                    </Item>
                ))}


            </ItemGroup>
        </Segment>

    )
}