import type { Meta, StoryObj } from '@storybook/react'
import BasicType from './BasicType'

const meta: any = {
  title: 'ReactGrid/BasicType',
  component: BasicType,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  }
} satisfies Meta<typeof BasicType>

export default meta
type Story = StoryObj<typeof meta>

export const Example: Story = { 
  args: {
    
  }
}