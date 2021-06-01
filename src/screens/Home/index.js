import React from 'react';
import {Text, SafeAreaView, ScrollView, RefreshControl} from 'react-native';
import {styles} from './styles';
import CardPost from '../../components/CardPost';
import {DETAIL_SCREEN} from '../../constants/routes';
import {useEffect} from 'react';
import {getAllPosts} from '../../api/post';
import {useState} from 'react';
import {useCallback} from 'react';

const Index = ({navigation}) => {
  const [posts, setPosts] = useState([]);

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 2000);
  }, []);

  useEffect(() => {
    getAllPosts(result => {
      console.log(result);
      setPosts(result);
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.bodyContainer}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <Text style={styles.text}>List Post</Text>
        {posts.map((data, index) => (
          <CardPost
            id={data.id}
            title={data.title}
            body={data.body}
            key={index.toString()}
            image={'https://source.unsplash.com/random'}
            onPress={() =>
              navigation.navigate(DETAIL_SCREEN, {postId: data.id})
            }
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Index;
