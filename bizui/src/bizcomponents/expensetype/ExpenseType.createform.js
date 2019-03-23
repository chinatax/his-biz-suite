import React, { Component } from 'react';
import {
  Card,
  Button,
  Form,
  Icon,
  Col,
  Row,
  DatePicker,
  TimePicker,
  Input,
  Select,
  Popover,
  Switch,
} from 'antd';
import { connect } from 'dva';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';
import SelectObject from '../../components/SelectObject';
import { ImageComponent } from '../../axios/tools';
import FooterToolbar from '../../components/FooterToolbar';
import styles from './ExpenseType.createform.less';
import { mapBackToImageValues, mapFromImageValues } from '../../axios/tools';
import GlobalComponents from '../../custcomponents';
import ExpenseTypeBase from './ExpenseType.base';
import appLocaleName from '../../common/Locale.tool';
const { Option } = Select;
const { RangePicker } = DatePicker;
const { TextArea } = Input;

const testValues = {};
/*
const testValues = {
  name: '诊疗费',
  helperChars: 'zlf',
  status: '正常',
  hospitalId: 'H000001',
  description: '    ���������������������\
���������������\
\
���������������\
\
',
}
*/

const imageKeys = [];

class ExpenseTypeCreateForm extends Component {
  state = {
    previewVisible: false,
    previewImage: '',
    convertedImagesValues: {},
  };

  componentDidMount() {}

  handlePreview = file => {
    console.log('preview file', file);
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  };

  handleChange = (event, source) => {
    console.log('get file list from change in update change:', source);

    const { fileList } = event;
    const { convertedImagesValues } = this.state;

    convertedImagesValues[source] = fileList;
    this.setState({ convertedImagesValues });
    console.log('/get file list from change in update change:', source);
  };

  render() {
    const { form, dispatch, submitting, role } = this.props;
    const { convertedImagesValues } = this.state;
    const userContext = null;
    const { getFieldDecorator, validateFieldsAndScroll, getFieldsError } = form;
    const { fieldLabels } = ExpenseTypeBase;
    const { ExpenseTypeService } = GlobalComponents;

    const capFirstChar = value => {
      //const upper = value.replace(/^\w/, c => c.toUpperCase());
      const upper = value.charAt(0).toUpperCase() + value.substr(1);
      return upper;
    };

    const submitCreateForm = () => {
      validateFieldsAndScroll((error, values) => {
        if (error) {
          console.log('code go here', error);
          return;
        }

        const { owner } = this.props;
        const imagesValues = mapBackToImageValues(convertedImagesValues);

        const parameters = { ...values, ...imagesValues };
        const cappedRoleName = capFirstChar(role);
        dispatch({
          type: `${owner.type}/add${cappedRoleName}`,
          payload: { id: owner.id, role: role, parameters },
        });
      });
    };
    const submitCreateFormAndContinue = () => {
      validateFieldsAndScroll((error, values) => {
        if (error) {
          console.log('code go here', error);
          return;
        }

        const { owner } = this.props;
        const imagesValues = mapBackToImageValues(convertedImagesValues);

        const parameters = { ...values, ...imagesValues };
        dispatch({
          type: `${owner.type}/addExpenseType`,
          payload: { id: owner.id, type: 'expenseType', parameters, continueNext: true },
        });
      });
    };

    const goback = () => {
      const { owner } = this.props;

      dispatch({
        type: `${owner.type}/goback`,
        payload: {
          id: owner.id,
          type: 'expenseType',
          listName: appLocaleName(userContext, 'List'),
        },
      });
    };
    const errors = getFieldsError();
    const getErrorInfo = () => {
      const errorCount = Object.keys(errors).filter(key => errors[key]).length;
      if (!errors || errorCount === 0) {
        return null;
      }
      // eslint-disable-next-line no-unused-vars
      const scrollToField = fieldKey => {
        const labelNode = document.querySelector('label[for="${fieldKey}"]');
        if (labelNode) {
          labelNode.scrollIntoView(true);
        }
      };
      const errorList = Object.keys(errors).map(key => {
        if (!errors[key]) {
          return null;
        }
        return (
          <li key={key} className={styles.errorListItem} onClick={() => scrollToField(key)}>
            <Icon type="cross-circle-o" className={styles.errorIcon} />
            <div className={styles.errorMessage}>{errors[key][0]}</div>
            <div className={styles.errorField}>{fieldLabels[key]}</div>
          </li>
        );
      });
      return (
        <span className={styles.errorIcon}>
          <Popover
            title={appLocaleName(userContext, 'FieldValidateInfo')}
            content={errorList}
            overlayClassName={styles.errorPopover}
            trigger="click"
            getPopupContainer={trigger => trigger.parentNode}
          >
            <Icon type="exclamation-circle" />
          </Popover>
          {errorCount}
        </span>
      );
    };

    const tryinit = fieldName => {
      const { owner } = this.props;
      const { referenceName } = owner;
      if (referenceName != fieldName) {
        return null;
      }
      return owner.id;
    };

    const availableForEdit = fieldName => {
      const { owner } = this.props;
      const { referenceName } = owner;
      if (referenceName != fieldName) {
        return true;
      }
      return false;
    };
    const formItemLayout = {
      labelCol: { span: 10 },
      wrapperCol: { span: 14 },
    };
    const switchFormItemLayout = {
      labelCol: { span: 14 },
      wrapperCol: { span: 4 },
    };
    return (
      <PageHeaderLayout
        title={appLocaleName(userContext, 'CreateNew')}
        content={appLocaleName(userContext, 'CreateNew')}
        wrapperClassName={styles.advancedForm}
      >
        <Card
          title={appLocaleName(userContext, 'BasicInfo')}
          className={styles.card}
          bordered={false}
        >
          <Form>
            <Row gutter={16}>
              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.name} {...formItemLayout}>
                  {getFieldDecorator('name', {
<<<<<<< HEAD
                    rules: [{ required: true, message: appLocaleName(userContext, 'PleaseInput') }],
                  })(<Input placeholder="请输入名称" />)}
=======
                    rules: [{ required: true, message: appLocaleName(userContext,"PleaseInput") }],
                  })(
                    <Input placeholder="请输入名称" />
                  )}
>>>>>>> f0fec7af5ee3d5cf047fe422adb18787dcd4aa89
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.helperChars} {...formItemLayout}>
                  {getFieldDecorator('helperChars', {
<<<<<<< HEAD
                    rules: [{ required: true, message: appLocaleName(userContext, 'PleaseInput') }],
                  })(<Input placeholder="请输入辅助识字课" />)}
=======
                    rules: [{ required: true, message: appLocaleName(userContext,"PleaseInput") }],
                  })(
                    <Input placeholder="请输入辅助识字课" />
                  )}
>>>>>>> f0fec7af5ee3d5cf047fe422adb18787dcd4aa89
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.status} {...formItemLayout}>
                  {getFieldDecorator('status', {
<<<<<<< HEAD
                    rules: [{ required: true, message: appLocaleName(userContext, 'PleaseInput') }],
                  })(<Input placeholder="请输入状态" />)}
=======
                    rules: [{ required: true, message: appLocaleName(userContext,"PleaseInput") }],
                  })(
                    <Input placeholder="请输入状态" />
                  )}
>>>>>>> f0fec7af5ee3d5cf047fe422adb18787dcd4aa89
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Card>

<<<<<<< HEAD
        <Card title="描述" className={styles.card} bordered={false}>
          <Form>
=======


       
        





        <Card title="描述" className={styles.card} bordered={false}>
          <Form >
>>>>>>> f0fec7af5ee3d5cf047fe422adb18787dcd4aa89
            <Row gutter={16}>
              <Col lg={24} md={24} sm={24}>
                <Form.Item>
                  {getFieldDecorator('description', {
                    rules: [{ required: true, message: appLocaleName(userContext, 'PleaseInput') }],
                  })(<TextArea rows={4} placeholder={appLocaleName(userContext, 'PleaseInput')} />)}
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Card>

        <Card
          title={appLocaleName(userContext, 'Associate')}
          className={styles.card}
          bordered={false}
        >
          <Form>
            <Row gutter={16}>
              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.hospital} {...formItemLayout}>
                  {getFieldDecorator('hospitalId', {
                    initialValue: tryinit('hospital'),
                    rules: [{ required: true, message: appLocaleName(userContext, 'PleaseInput') }],
                  })(
                    <SelectObject
                      disabled={!availableForEdit('hospital')}
                      targetType={'hospital'}
                      requestFunction={ExpenseTypeService.requestCandidateHospital}
                    />
                  )}
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Card>

        <FooterToolbar>
          {getErrorInfo()}
          <Button type="primary" onClick={submitCreateForm} loading={submitting} htmlType="submit">
            {appLocaleName(userContext, 'Submit')}
          </Button>
          <Button type="primary" onClick={submitCreateFormAndContinue} loading={submitting}>
            {appLocaleName(userContext, 'SubmitAndContinue')}
          </Button>
          <Button type="danger" onClick={goback} loading={submitting}>
            {appLocaleName(userContext, 'Discard')}
          </Button>
        </FooterToolbar>
      </PageHeaderLayout>
    );
  }
}

export default connect(state => ({
  collapsed: state.global.collapsed,
}))(Form.create()(ExpenseTypeCreateForm));
