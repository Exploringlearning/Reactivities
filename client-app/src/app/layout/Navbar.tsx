import { Button, Container, Menu } from 'semantic-ui-react';

export default function Navbar(){
    return(
            <Menu inverted fixed='top'>
                <Container>
                    <Menu.Item header>
                        <img src="/assets/logo.png" alt="logo" style={{marginRight: '10px'}} />
                       Reactivities
                    </Menu.Item>
                    <Menu.Item name="Activities"/>
                    <Menu.Item>
                        <Button positive content="Create Acitivity"/>
                    </Menu.Item>
                </Container>

      </Menu>

    )

}