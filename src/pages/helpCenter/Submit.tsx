import { FC, useState, ChangeEvent, useCallback } from 'react';
import styled from 'styled-components';
import { SubmitHandler, useForm } from 'react-hook-form';
import HelpCenterLayout from '../../components/Layout/HelpCenterLayout';
import Text from '../../components/Text';
import Flex from '../../components/Flex';
import iconClip from '../../assets/svg/icon-clip.svg';
import iconClose from '../../assets/svg/icon-close.svg';

const SubmitSection = styled.section`
  width: 618px;
  margin: 0 auto;
`;

const SubmitTitle = styled.div`
  margin: 80px 0;
  text-align: center;
`;

const SubmitText = styled.input`
  width: 596px;
  height: 68px;
  font-size: 20px;
  border: 1px solid #fff;
  background-color: #f9f9f9;
  padding: 0 0 0 22px;
  caret-color: #aae112;
  outline: none;
  border-radius: 8px;
  margin: 12px 0 40px 0;
  ::placeholder {
    color: #202020;
    opacity: 0.3;
  }
  :focus {
    border: 1px solid #000;
    border-radius: 8px;
  }
`;

const SubmitSelect = styled.select`
  width: 618px;
  height: 68px;
  font-size: 20px;
  margin: 12px 0 40px 0;
  outline: none;
  border: 1px solid #fff;
  padding-left: 22px;
  background-color: #f9f9f9;
  border-radius: 8px;
  color: rgba(32, 32, 32, 0.3);
  :focus {
    border: 1px solid #202020;
  }
  option[value=''][disabled] {
    display: none;
  }
`;

const SubmitTextarea = styled.textarea`
  margin: 12px 0 40px 0;
  padding: 22px 16px;
  width: 586px;
  height: 361px;
  resize: none;
  border: 1px solid #fff;
  background-color: #f9f9f9;
  border-radius: 8px;
  overflow: hidden;
  font-size: 20px;
  :focus {
    outline: 1px solid #000;
  }
`;

const SubmitFile = styled.div`
  margin: 12px 0 20px 0;
  display: flex;
  flex-direction: column;
  label {
    width: 618px;
    height: 68px;
    border: 1px solid #000;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    cursor: pointer;
  }
  input {
    display: none;
  }
`;

const IconClip = styled.div`
  width: 21px;
  height: 22px;
  background-image: url(${iconClip});
  margin-right: 9px;
`;

const IconClose = styled.div`
  width: 12px;
  height: 12px;
  background-image: url(${iconClose});
`;

const SubmitFileList = styled.div`
  display: flex;
  justify-content: space-between;
  color: #000;
  opacity: 0.3;
  margin-bottom: 12px;
  :last-child {
    margin-bottom: 0;
  }
`;

const SubmitButton = styled.button`
  margin: 80px 0 120px 0;
  width: 618px;
  height: 68px;
  color: #fff;
  font-size: 24px;
  border: none;
  padding: 0;
  border-radius: 8px;
  background-color: #000;
  cursor: pointer;
`;

interface SubmitFormData {
  email: string;
  type: string;
  subject: string;
  description: string;
}

const Submit: FC = () => {
  const { register, handleSubmit } = useForm<SubmitFormData>();
  const [fileList, setFileList] = useState<File[]>([]);

  const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    const newFileList: File[] = [];
    if (files) {
      for (let i = 0; i < files.length; i += 1) {
        const file = files.item(i);
        if (file) newFileList.push(file);
      }
    }
    setFileList([...fileList, ...newFileList]);
  };

  const onFileDelete = (e: any) => {
    console.log(e.target);
  };

  const onSubmit: SubmitHandler<SubmitFormData> = useCallback((data) => {
    console.log(data);
  }, []);

  return (
    <>
      <HelpCenterLayout />
      <SubmitSection>
        <SubmitTitle>
          <Text size="48px" weight="700">
            Submit a request
          </Text>
        </SubmitTitle>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Text size="24px" weight="700">
            Email address
          </Text>
          <SubmitText
            type="text"
            placeholder="Enter your email address"
            defaultValue=""
            autoComplete="off"
            {...register(`email`, {
              required: true,
              pattern:
                /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
            })}
          />
          <Flex flexDirection="column">
            <Text size="24px" weight="700">
              Type
            </Text>
            <SubmitSelect {...register(`type`, { required: true })}>
              <option value="" disabled selected>
                Select a type
              </option>
              <option value="test">test</option>
              <option value="qwe">qwe</option>
              <option value="asd">asd</option>
              <option value="zxc">zxc</option>
            </SubmitSelect>
          </Flex>
          <Text size="24px" weight="700">
            Subject
          </Text>
          <SubmitText
            type="text"
            placeholder="Enter a topic"
            defaultValue=""
            autoComplete="off"
            {...register(`subject`, { required: true })}
          />
          <Flex flexDirection="column">
            <Text size="24px" weight="700">
              Description
            </Text>
            <SubmitTextarea
              placeholder="Please enter the details of your request. &#13;&#10;A member of our support staff will respond as soon as possible"
              {...register(`description`)}
            />
          </Flex>
          <Flex flexDirection="column">
            <Text size="24px" weight="700">
              Attachments(optional)
            </Text>
            <SubmitFile>
              <label htmlFor="file">Add file or drop files here</label>
              <input type="file" id="file" multiple onChange={onFileChange} />
            </SubmitFile>

            {fileList.map((file) => (
              <SubmitFileList>
                <Flex alignItems="center">
                  <IconClip />
                  {file.name}
                </Flex>
                <Flex alignItems="center" onClick={onFileDelete}>
                  <IconClose />
                </Flex>
              </SubmitFileList>
            ))}
          </Flex>
          <SubmitButton>Submit</SubmitButton>
        </form>
      </SubmitSection>
    </>
  );
};

export default Submit;
