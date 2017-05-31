import React from "react";
import Avatar from './avatar';
import {
  Text,
  List,
  ListItem,
  Image,
  Link
} from "spectacle";

export default (props) => (
  <div className="userinfo">
    <Avatar
      photo={props.user.photo}
      name={props.user.name}
    />
    <div className="userinfo-name">
      <List
        textAlign="none"
        padding="0"
        margin="0"
        textSize="1.5em"
        style={{ 'listStylePosition': 'outside' }}
      >
        <ListItem style={{ display: 'inline-flex' }}>
          <Text textColor="primary" textSize="1.5em">
              {props.user.name}
          </Text>
        </ListItem>
        <ListItem style={{ display: 'inline-flex' }}>
          <Text textColor="primary" textSize="1em">
            {props.user.company}
          </Text>
        </ListItem>
      </List>
      <List textAlign="center">
        {
          props.user.social.map((item, index) =>
            <ListItem
              key={index}
              style={{ 'display': 'inline-block', 'padding-right': '20px' }}
            >
              <Link
                href={item.link}
                target="blank"
              >
                <Image
                  width="70px"
                  height="70px"
                  src={item.photo}
                />
              </Link>
            </ListItem>
          )
        }
      </List>
    </div>
  </div>
);