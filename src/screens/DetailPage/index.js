/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {Text, SafeAreaView, ScrollView, Image, View} from 'react-native';
import {styles} from './styles';
import Comment from '../../components/Comment';
import {list_comments} from '../../constants/mockdata';
import TextField from '../../components/TextField';
import Button from '../../components/Button';
import {useEffect} from 'react';
import {useState} from 'react';
import {getPost} from '../../api/post';
import {getComments} from '../../api/comment';

const Index = ({route, navigation}) => {
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [commentField, setCommentField] = useState('');

  useEffect(() => {
    getPost(route.params.postId, result => {
      setPost(result);
    });
    getComments(route.params.postId, result => {
      console.log(result);
      setComments(result);
    });
  }, []);

  const postComment = () => {
    var newComment = {
      id: comments.length,
      name: 'John Doe',
      email: 'johndoe@gmail.com',
      body: commentField,
    };
    setComments(old => [...old, newComment]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.bodyContainer}>
        <Text style={styles.text}>Detail Post</Text>

        <Image
          source={{uri: 'https://source.unsplash.com/random'}}
          style={styles.img}
        />

        {/* <View style={styles.wrapperInfo}>
          <View style={styles.categoryBadge}>
            <Text style={styles.textCategory}>Creative</Text>
          </View>

          <Text style={styles.textCategory}>1 November 2021</Text>
        </View> */}

        <Text style={styles.textTitle}>{post.title}</Text>

        <Text style={styles.textDesc}>{post.body}</Text>

        <View style={styles.divider} />

        {comments ? (
          <View>
            <Text style={styles.textComment}>Comments ({comments.length})</Text>
            {comments.map((data, index) => (
              <Comment
                key={index.toString()}
                name={data.name}
                image={'https://source.unsplash.com/random'}
                body={data.body}
              />
            ))}
          </View>
        ) : (
          <> </>
        )}

        <View style={styles.wrapperCommentInput}>
          <TextField
            placeholder="enter a comment"
            style={{marginRight: 12}}
            value={commentField}
            onChangeText={text => setCommentField(text)}
          />
          <Button title="Submit" onPress={() => postComment()} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Index;
