/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Input from 'src/components/atoms/HtmlInput'
import Label from 'src/components/atoms/HtmlLabel'
import Select from 'src/components/atoms/HtmlSelect'
import TextArea from 'src/components/atoms/HtmlTextArea'
import Button from 'src/components/atoms/Button/Button'

export interface IFormIKEAChatProps {}
const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/

const ikeaContactFormSchema = yup
  .object({
    name: yup.string().required('Name is required'),
    email: yup.string().email().required('A valid email is required'),
    phone: yup.string().matches(phoneRegex, 'A valid phone number is required'),
    location: yup.string().required('Location is required'),
    category: yup.string().required('Category is required'),
    message: yup.string().required('Message is required'),
  })
  .required()

type IkeaContactFormSchema = yup.InferType<typeof ikeaContactFormSchema>

const FormIKEAChat = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IkeaContactFormSchema>({
    resolver: yupResolver(ikeaContactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      location: '',
      category: '',
      message: '',
    },
  })

  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })

  return (
    <form onSubmit={onSubmit} className='space-y-3 '>
      <Label title='Name' error={errors.name}>
        <Input placeholder='Enter the name.' {...register('name')} />
      </Label>
      <Label title='Email' error={errors.email}>
        <Input placeholder='Enter the email.' {...register('email')} />
      </Label>
      <Label title='Phone' error={errors.phone}>
        <Input placeholder='Enter the phone.' {...register('phone')} />
      </Label>
      <Label title='Category' error={errors.category}>
        <Select {...register('category')}>
          <option value='Select category' disabled hidden>
            Select category
          </option>
          <option value='General Store Information'>
            General Store Information
          </option>
          <option value='After Sales Support: Exchange/Refunds/Missing Spares/Parts'>
            After Sales Support: Exchange/Refunds/Missing Spares/Parts
          </option>
          <option value='After Sales Support: Double Billing/Oversold/Partial Delivery'>
            After Sales Support: Double Billing/Oversold/Partial Delivery
          </option>
          <option value='Assembly Service : Request/Instructions/Reschedule'>
            Assembly Service : Request/Instructions/Reschedule
          </option>
          <option value='Assembly Service : Cancellation/Complaint/Feedback'>
            Assembly Service : Cancellation/Complaint/Feedback
          </option>
          <option value='Home Furnishing Consulting Request/Feedback/Complaint'>
            Home Furnishing Consulting Request/Feedback/Complaint
          </option>
          <option value='Kitchen Planning Appointment'>
            Kitchen Planning Appointment
          </option>
          <option value='Kitchen Appliances / Installation Request'>
            Kitchen Appliances / Installation Request
          </option>
          <option value='Kitchen Appliances :Complaint/Feedback'>
            Kitchen Appliances :Complaint/Feedback
          </option>
          <option value='Measurement Service : Request/Feedback/Complaint'>
            Measurement Service : Request/Feedback/Complaint
          </option>
          <option value='IKEA Campaign'>IKEA Campaign</option>
          <option value='IKEA Family login issue / IKEA Family Membership'>
            IKEA Family login issue / IKEA Family Membership
          </option>
          <option value='IKEA Business login issue / IKEA Business Membership'>
            IKEA Business login issue / IKEA Business Membership
          </option>
          <option value='Ecommerce'>Ecommerce</option>
          <option value='B2B Customer Request/Feedback/Complaint'>
            B2B Customer Request/Feedback/Complaint
          </option>
          <option value='GATI Delivery : Update /Reschedule/Cancellation/Feedback/Complaint'>
            GATI Delivery : Update /Reschedule/Cancellation/Feedback/Complaint
          </option>
          <option value='GST changes in Bill'>GST changes in Bill</option>
          <option value='Lost &amp; Found (Non IKEA Article)'>
            Lost &amp; Found (Non IKEA Article)
          </option>
          <option value='Urban Clap Service Feedback/Complaint'>
            Urban Clap Service Feedback/Complaint
          </option>
          <option value='IKEA Supplier Tie up'>IKEA Supplier Tie up</option>
          <option value='IKEA Food'>IKEA Food</option>
          <option value='Job Requirement'>Job Requirement</option>
          <option value='Others'>Others</option>
        </Select>
      </Label>
      <Label title='Location' error={errors.location}>
        <Select {...register('location')}>
          <option value='Select location' disabled>
            Select location
          </option>
          <option value='Mumbai'>Mumbai</option>
          <option value='Delhi'>Delhi</option>
          <option value='Bengaluru'>Bengaluru</option>
          <option value='Hyderabad'>Hyderabad</option>
          <option value='Ahmedabad'>Ahmedabad</option>
          <option value='Chennai'>Chennai</option>
          <option value='Kolkata'>Kolkata</option>
          <option value='Surat'>Surat</option>
          <option value='Pune'>Pune</option>
          <option value='Jaipur'>Jaipur</option>
          <option value='Lucknow'>Lucknow</option>
        </Select>
      </Label>
      <Label title='Message' error={errors.message}>
        <TextArea placeholder='Type something here.' {...register('message')} />
      </Label>
      <Button type='submit'>Submit</Button>
    </form>
  )
}

export default FormIKEAChat
