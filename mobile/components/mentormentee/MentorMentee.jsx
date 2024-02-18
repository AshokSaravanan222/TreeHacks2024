
import { View, FlatList } from 'react-native'
import { Divider, Text} from '@rneui/themed'
import MentorMenteeCard from '../common/mentorMenteeCard/MentorMenteeCard';
import Heading from '../heading/Heading';

const MentorMentee = ({data}) => {
  return (
    <View >
        <FlatList 
        data = {data}
        renderItem={({item}) => <MentorMenteeCard person={item}/>}
        keyExtractor={item => item.id}
        ListHeaderComponent={
          <Heading 
            text={"Match a Mentor"}
          />
        }
        ItemSeparatorComponent={
            <Divider />
        }
      />
    </View>
  )
}

export default MentorMentee