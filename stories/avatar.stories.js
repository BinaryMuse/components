import React from 'react';
import { action } from '@storybook/addon-actions';
import {Avatar} from '../src';

export default {
  title: 'Avatar',
  component: Avatar,
};

export const Default = () => {
  return (
    <Avatar src="https://avatars.githubusercontent.com/primer" />
  )
}