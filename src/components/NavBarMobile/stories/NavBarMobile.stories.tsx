import { Story, Meta } from '@storybook/react/types-6-0'
import NavBarMobile, {
  NavBarMobileProps,
} from '../../NavBarMobile/NavBarMobile'

export default {
  version: '14.1',
  component: NavBarMobile,
} as Meta

const Template: Story<NavBarMobileProps> = (args) => <NavBarMobile {...args} />

export const Empty = Template.bind({})
Empty.args = {
  value: 'notifications',
}
