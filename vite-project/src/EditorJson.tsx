import Editor from '@monaco-editor/react';
import { useState } from 'react';
import { getData } from './getData';

type Props = {
  endpoint: string;
}

const EditorJson = ({endpoint}: Props) => {
  const [graphql, setGraphql] = useState<string>('');
  const [graphqlResult, setGraphqlResult] = useState<string | undefined>(undefined);

  function handleEditorChange(value: string | undefined) {
    if (value) {
      setGraphql(value);
    }
  }

  const handleSubmit = async () => {
    try {
      const response = await getData(graphql, endpoint);
      if (response && response.data) {
        setGraphqlResult(JSON.stringify(response, null, 2));
      }
    } catch (error) {
      console.error('GraphQL Error:', error);
    }
  }

  return (
    <>
      <Editor
        height="50vh"
        theme="vs-dark"
        defaultLanguage=""
        defaultValue=""
        onChange={handleEditorChange}
        options={{ 
          minimap: {
            enabled: false, // Міні-карта
          }, }}
      />
      <button onClick={handleSubmit}>Submit</button>
      <Editor
        height="50vh"
        theme="vs-dark"
        defaultLanguage="json"
        value={graphqlResult}
        options={{ readOnly: true, // Тільки читати
          minimap: {
            enabled: false, // Міні-карта
          }, }}
      />
    </>
  );
};

export default EditorJson;
