import { FC, useState, ChangeEvent, useCallback } from 'react';
import styled from 'styled-components';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useMediaQuery } from 'react-responsive';
import HelpCenterLayout from '../../components/Layout/HelpCenterLayout';
import Text from '../../components/Text';
import Flex from '../../components/Flex';
import iconClip from '../../assets/svg/icon-clip.svg';
import iconClose from '../../assets/svg/icon-close.svg';
import Icon from '../../components/Icon';

const SubmitSection = styled.section`
  max-width: 618px;
  margin: 0 auto;
  @media screen and (max-width: 767px) {
    max-width: 320px;
  }
`;

const SubmitTitle = styled.div`
  margin: 80px 0;
  text-align: center;
  @media screen and (max-width: 767px) {
    margin: 40px 0 53px 0;
  }
`;

const SubmitText = styled.input`
  width: 594px;
  height: 68px;
  font-size: 20px;
  border: 1px solid #fff;
  background-color: #f9f9f9;
  padding-left: 16px;
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
  @media screen and (max-width: 767px) {
    width: 296px;
    height: 54px;
    margin: 8px 0 24px 0;
    font-size: 14px;
  }
`;

const SubmitSelect = styled.select`
  width: 618px;
  height: 68px;
  font-size: 20px;
  margin: 12px 0 40px 0;
  outline: none;
  border: 1px solid #fff;
  padding-left: 16px;
  background-color: #f9f9f9;
  border-radius: 8px;
  color: black;
  :focus {
    border: 1px solid #202020;
  }
  :required:invalid {
    color: rgba(32, 32, 32, 0.3);
  }
  @media screen and (max-width: 767px) {
    width: 320px;
    height: 54px;
    margin: 8px 0 24px 0;
    font-size: 14px;
  }
`;

const SubmitTextarea = styled.textarea`
  margin: 12px 0 40px 0;
  padding: 22px 16px;
  width: 584px;
  height: 361px;
  resize: none;
  border: 1px solid #fff;
  background-color: #f9f9f9;
  border-radius: 8px;
  overflow: hidden;
  font-size: 20px;
  font-family: 'Pretendard';
  caret-color: #aae112;
  :focus {
    outline: 1px solid #000;
  }
  ::placeholder {
    color: #202020;
    opacity: 0.3;
  }
  @media screen and (max-width: 767px) {
    width: 286px;
    height: 214px;
    margin: 8px 0 24px 0;
    font-size: 14px;
  }
`;

const SubmitFile = styled.div`
  margin: 12px 0 20px 0;
  display: flex;
  flex-direction: column;
  label {
    width: 616px;
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
  @media screen and (max-width: 767px) {
    margin: 8px 0 12px 0;
    label {
      width: 318px;
      height: 54px;
      font-size: 14px;
    }
  }
`;

const SubmitFileList = styled.div`
  display: flex;
  justify-content: space-between;
  color: #000;
  opacity: 0.3;
  margin-bottom: 12px;
  .close-btn {
    cursor: pointer;
  }
  :last-child {
    margin-bottom: 0;
  }
  @media screen and (max-width: 767px) {
    font-size: 14px;
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
  @media screen and (max-width: 767px) {
    width: 320px;
    margin: 44px 0 60px 0;
    font-size: 16px;
  }
`;

interface SubmitFormData {
  email: string;
  type: string;
  subject: string;
  description: string;
}

const Submit: FC = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 767px)` });
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

  const onFileDelete = (idx: number) => {
    setFileList(fileList.filter((file, id) => idx !== id));
  };

  const onSubmit: SubmitHandler<SubmitFormData> = useCallback((data) => {
    console.log(data);
  }, []);

  return (
    <>
      <HelpCenterLayout />
      <SubmitSection>
        <SubmitTitle>
          <Text size={isMobile ? `16px` : `48px`} weight="700">
            Submit a request
          </Text>
        </SubmitTitle>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Text size={isMobile ? `14px` : `24px`} weight="700" display="block">
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
            <Text
              size={isMobile ? `14px` : `24px`}
              weight="700"
              display="block"
            >
              Type
            </Text>
            <SubmitSelect
              defaultValue=""
              required
              {...register(`type`, { required: true })}
            >
              <option value="" disabled selected hidden>
                Select a type
              </option>
              <option value="test">test</option>
              <option value="qwe">qwe</option>
              <option value="asd">asd</option>
              <option value="zxc">zxc</option>
            </SubmitSelect>
          </Flex>
          <Text size={isMobile ? `14px` : `24px`} weight="700" display="block">
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
            <Text
              size={isMobile ? `14px` : `24px`}
              weight="700"
              display="block"
            >
              Description
            </Text>
            <SubmitTextarea
              placeholder="Please enter the details of your request. &#13;&#10;A member of our support staff will respond as soon as possible"
              {...register(`description`)}
            />
          </Flex>
          <Flex flexDirection="column">
            <Text
              size={isMobile ? `14px` : `24px`}
              weight="700"
              display="block"
            >
              Attachments(optional)
            </Text>
            <SubmitFile>
              <label htmlFor="file">Add file or drop files here</label>
              <input type="file" id="file" multiple onChange={onFileChange} />
            </SubmitFile>
            {fileList.map((file, idx) => (
              // eslint-disable-next-line react/no-array-index-key
              <SubmitFileList key={idx}>
                <Flex alignItems="center">
                  <Icon
                    url={iconClip}
                    width={isMobile ? `12px` : `21px`}
                    height={isMobile ? `12px` : `22px`}
                    margin="0 9px 0 0"
                    backgroundSize="cover"
                  />
                  {file.name}
                </Flex>
                <Flex
                  alignItems="center"
                  onClick={() => onFileDelete(idx)}
                  className="close-btn"
                >
                  <Icon
                    url={iconClose}
                    width={isMobile ? `10px` : `12px`}
                    height={isMobile ? `10px` : `12px`}
                    backgroundSize="cover"
                  />
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
