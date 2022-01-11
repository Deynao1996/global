import {useCheckBox} from '../../../hooks/hook';

import './_requestPage.scss';

const firstFormContent = [
  {title: 'App Design', id: 'app', isCheck: false},
  {title: 'Graphic Design', id: 'web', isCheck: false},
  {title: 'App Design', id: 'Motion Design', isCheck: false}
]

const secondFormContent = [
  {title: 'UX Design', id: 'ux', isCheck: false},
  {title: 'Webdesign', id: 'graphic', isCheck: false},
  {title: 'Marketing', id: 'marketing', isCheck: false}
]

const RequestPage = () => {

  return (
    <div className="request">
        <h6 className="request__title">You want us to do</h6>
        <form className="request__form" action="#">
          <div className="request__wrapper">
            <div className="request__form-first">
              <InputsContent arr={firstFormContent}/>
            </div>
            <div className="request__form-second">
              <InputsContent arr={secondFormContent}/>
            </div>
          <div className="request__form-send">
              <input type="text" placeholder="Name"/>
              <input type="text" placeholder="Email"/>
          </div>
          <button type="submit" className="btn btn__form">Send request</button>
          </div>
        </form>
    </div>
  )
};

const InputsContent = ({arr}) => {
  const {renderItems} = useCheckBox(arr);

  return (
    <>
      {renderItems()}
    </>
  )
}


export default RequestPage;
