/*
 * @Author: ruzhan
 * @Date: 2019-09-18 16:42:49
 * @Descripttion:
 * @Org: copyright@meeruu
 * @Email: zhan.ru@meeruu.com
 */
import React, { Component } from "react";
import { Form, Input, Button } from "antd";
import axios from '../../axios';

class Test extends Component {

    onSubmitHanlder = (e) => {
        e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.setDataHandler(values.content);
      }
    });
    }

    setDataHandler = (content) => {
        axios.ajax({
            url: 'http://localhost:5000/errCatch',
            method: 'POST',
            data: {
                params: {content}
            }
        })
    }

  render() {
    const FormItem = Form.Item;
    const {
      getFieldDecorator,
      getFieldsError,
      getFieldError,
      isFieldTouched
    } = this.props.form;

    return (
      <Form onSubmit={this.onSubmitHanlder}>
        <FormItem>{getFieldDecorator("content", {})(<Input />)}</FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </FormItem>
      </Form>
    );
  }
}

export default Form.create()(Test);
