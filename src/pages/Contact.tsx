import { Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Form, Input } from "@heroui/react"
import React, { useEffect, useMemo, useState } from "react"
import { Textarea } from "@heroui/input"
import * as z from "zod"
import emailjs from '@emailjs/browser';
import { ContactReasonOptions, IFormData } from "@/Helpers/helpers"

// August 5:
// Don't let user submit unless all data has been properly validated and is not empty
// Do not show "Thanks, I will reach out" message unless it has been sent. Use Promise/await
// Show red border or something on the button when invalid submission


// | **Goal**                      | **Tailwind Classes**                      | **Explanation**                                                  |
// | ----------------------------- | ----------------------------------------- | ---------------------------------------------------------------- |
// | Mobile only (`<640px`)        | `text-left sm:text-left md:text-left ...` | Use the base class and "reset" at higher breakpoints if needed.  |
// | **Only `sm` (640px–767px)**   | `text-left sm:text-justify md:text-left`  | Add `sm:` and then "reset" at `md` so it doesn't inherit upward. |
// | **Only `md` (768px–1023px)**  | `text-left md:text-justify lg:text-left`  | Same pattern: override at `md`, reset at `lg`.                   |
// | **Only `lg` (1024px–1279px)** | `text-left lg:text-justify xl:text-left`  | Override at `lg`, then reset at `xl`.                            |
// | **Only `xl` (1280px–1535px)** | `text-left xl:text-justify 2xl:text-left` | Override only for `xl`, then reset later.                        |



const HIDE_EMAILJS_PUBLIC_KEY = "HnBHTOaBI-PH419R8";
const HIDE_EMAILJS_SERVICE_ID = "service_maznurf";
const HIDE_EMAILJS_TEMPLATE_ID = "template_t8yivdx";


interface IEmailJSTemplateParams {
    from_name: string,
    message: string,
    email_from: string,
    reasonsForContact: string
}


export default function ContactPage() {
    const options: ContactReasonOptions = {
        "edit-file": "Website Inquiries",
        "debugging-support": "Debugging Support",
        "other": "Other",
        "delete-file": "Deleting a File"
    } // Connect html keys from JSX to visible options for the user



    // States for if the inputs have been clickedOutOf 
    const [clickedOutOfFirstName, setclickedOutOfFirstName] = useState<boolean>(false)
    const [clickedOutOfLastName, setclickedOutOfLastName] = useState<boolean>(false)
    const [clickedOutOfEmail, setclickedOutOfEmail] = useState<boolean>(false)
    const [clickedOutOfMessage, setClickedOutOfMessage] = useState<boolean>(false)
    const [otherWasClicked, setOtherWasClicked] = useState<boolean>(false)

    // Dropdown Menu States
    const [selectedDropdownKeys, setSelectedDropdownKeys] = useState(new Set<string>([]))
    const [dropdownInErrorState, setDropdownInErrorState] = useState<boolean>(false)
    const [dropdownTouched, setDropdownTouched] = useState<boolean>(false)

    // Form States
    const [formWasSubmitted, setFormWasSubmitted] = useState<boolean>(false);
    const [emailWasSent, setemailWasSent] = useState<boolean>(false);
    const [emailInErrorState, setEmailInErrorState] = useState<boolean>(false);

    const [firstNameInput, setfirstNameInput] = useState<string | null>(null);
    const [lastNameInput, setlastNameInput] = useState<string | null>(null);
    const [emailInput, setemailInput] = useState<string | null>(null);
    const [messageInput, setmessageInput] = useState<string | null>(null);

    const [emailIsValid, setemailIsValid] = useState<boolean>(false);

    const submitButtonDisabled = useMemo(() => {
        const formIsValid = (firstNameInput && lastNameInput && emailIsValid && messageInput)

        if (formIsValid){
            return false
        }else{
            return true
        }

    }, [firstNameInput, lastNameInput, emailIsValid, messageInput]) 


    useEffect(() =>
    {

        console.log(emailIsValid);
        console.log(JSON.stringify(emailSchema.safeParse(emailInput)))

        if (emailSchema.safeParse(emailInput).success === true){
            setemailIsValid(true)
        }
        else{
            setemailIsValid(false)
        }
        // console.log(emailSchema.parse(emailInput))
        // if (firstNameInput && lastNameInput && )
    }, [emailInput])
    //Validation Schema
    const emailSchema = z.email();
    

    /*
    selectedOptionsStr: string
    Purpose: The string the user sees in the dropdown menu for their selected options
    Description: A concatenation of the user's currently selected options in the dropdown menu, separated by a comma
    Example: "Debugging, Editing a File, Other"
    */
    const selectedOptionsStr: string = useMemo(() => {
        const selectedDropdownKeysArr = Array.from(selectedDropdownKeys) as (keyof ContactReasonOptions)[];
        console.log("Selected DropDownKeys:" + JSON.stringify(selectedDropdownKeysArr))

        if (selectedDropdownKeysArr.length === 0) {
            return "Select"
        }
        else {
            return selectedDropdownKeysArr.map(key => options[key]).sort().join(", ")
        };

    }, [selectedDropdownKeys]);

    // ----- Functions -----

    function handleSelectionChange(keys: any) {
        setDropdownTouched(true);
        setSelectedDropdownKeys(keys as Set<string>);
    };





    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        const formData = new FormData(e.target as HTMLFormElement);

        const dataItem: IFormData = {
            firstName: String(formData.get("first-name")),
            lastName: String(formData.get("last-name")),
            email: String(formData.get("email")),
            reasonsForContact: selectedOptionsStr,
            message: String(formData.get("message"))
        }

        const templateParams: IEmailJSTemplateParams = {
            from_name: dataItem.firstName,
            message: dataItem.message,
            email_from: dataItem.email,
            reasonsForContact: dataItem.reasonsForContact
            
        }
        
        
        //Email template: 
        emailjs.send(HIDE_EMAILJS_SERVICE_ID, HIDE_EMAILJS_TEMPLATE_ID, templateParams as unknown as Record<string, unknown>, HIDE_EMAILJS_PUBLIC_KEY)
        .then(() => {
            setEmailInErrorState(false);
            setFormWasSubmitted(true);
            setemailWasSent(true);
            console.log("Submitted: " + JSON.stringify(dataItem))
            })
            .catch((error) => {
                setemailWasSent(false);
                setFormWasSubmitted(false);
                setEmailInErrorState(true);
                console.log("Email was not sent", error);
            })
        }


        useEffect(() => {
            console.log(firstNameInput)
        }, [firstNameInput])


        // Keeps track of selectedDropDownKeys to see if the "other" button was clicked
        useEffect(() => {
            const selectedDropdownKeysArr = Array.from(selectedDropdownKeys) as (keyof ContactReasonOptions)[];

            if (selectedDropdownKeysArr.includes("other")) {
                setOtherWasClicked(true)
            }
            else {
                setOtherWasClicked(false)
            }

        }, [selectedDropdownKeys])


        // Validate dropdown selections whenever a user selects a new item
        useEffect(() => {
            if (dropdownTouched) {
                const isEmptySelection = (selectedDropdownKeys.size === 0);
                setDropdownInErrorState(isEmptySelection);
            }

        }, [selectedDropdownKeys, dropdownTouched]);


        return (
            <div>
                {/* <p className="text-red-500 hidden">Hello umm okay thanks bye</p> */}

                <div className="
                    md:pb-5
                    text-center
                     
                    mx-auto 
                    w-full
                    max-w-xl
                    px-4
                    sm:max-w-2xl
                    lg:max-w-3xl 
                    xl:max-w-4xl
                   
                    ">
                    <h1 className="md:mt-5 text-center text-2xl sm:text-3xl lg:text-4xl xl:text-5xl">Contact Me</h1>

                    <p className="
                            mt-2 
                            md:mt-5  
                            
                            text-center
                            lg:text-lg 
                            xl:text-xl
                            ">
                        To get in touch about product questions, debgugging, working together, inquiries, or a general question,
                        please fill out the form. You can also email me directly at <br className="hidden md:inline-block" /> <a href="mailto:eman-pelayo@outlook.com"
                            className="hover:text-blue-500 active:opacity-75 
                                    transition sm:text-base lg:text-lg xl:text-xl 
                                    hover:underline">
                            eman-pelayo@outlook.com</a>
                    </p>

                </div>

                <Form onSubmit={handleSubmit} validationBehavior="aria" className="p-5 w-full flex flex-col justify-center gap-4 !text-[#C6BECF] lg:max-w-3/5 lg:mx-auto">
                    <Input
                        variant="faded"
                        // color={"rgba(217,217,217,0.07)"}
                        label="First Name"
                        disableAnimation
                        labelPlacement="outside"
                        name="first-name"
                        placeholder="Enter your first name"
                        className="text-black"
                        type="text"
                        isRequired
                        onValueChange={setfirstNameInput}
                        onBlur={() => setclickedOutOfFirstName(true)}
                        classNames={{
                            label: "text-md !text-[#C6BECF]",
                            inputWrapper: "bg-[rgba(217,217,217,0.07)] text-[#C6BECF] border-none"

                        }}
                        validate={(value) => {
                            if (value.length === 0 && !clickedOutOfFirstName) {
                                return null
                            }

                            if (value.length === 0 && clickedOutOfFirstName) {
                                return "Please enter a first name";
                            }
                        }}
                    />

                    <Input
                        variant="faded"
                        isRequired
                        label="Last Name"
                        name="last-name"
                        placeholder="Enter your last name"
                        labelPlacement="outside"
                        type="text"
                        onValueChange={setlastNameInput}
                        classNames={{
                            label: "text-md !text-[#C6BECF]",
                            inputWrapper: "bg-[rgba(217,217,217,0.07)] text-[#C6BECF] border-none"
                        }}
                        onBlur={() => setclickedOutOfLastName(true)}
                        validate={(value) => {
                            if (value.length === 0 && !clickedOutOfLastName) {
                                return null
                            }

                            if (value.length === 0 && clickedOutOfLastName) {
                                return "Please enter a last name";
                            }
                        }}

                    />

                    <Input
                        variant="faded"
                        isRequired
                        onBlur={() => setclickedOutOfEmail(true)}
                        label="Email"
                        labelPlacement="outside"
                        name="email"
                        placeholder="Enter your email"
                        onValueChange={setemailInput}
                        type="email"
                        classNames={{
                            label: "text-md !text-[#C6BECF]",
                            inputWrapper: "bg-[rgba(217,217,217,0.07)] text-[#C6BECF] border-none"
                        }}
                        validate={(value) => {
                            if (clickedOutOfEmail) {
                                try {
                                    emailSchema.parse(value)
                                }
                                catch (error) {
                                    return "Please enter a valid email address"
                                }
                                
                            }
                        }}
                    />


                    <Dropdown className="bg-black text-white w-full hover:bg-purple-500" >
                        <div className="flex flex-col w-full">
                            <label className="!text-[#C6BECF] pb-2" htmlFor="contact-reason">What are you reaching out about?<span style={{ color: 'red' }}>*</span></label>
                            <DropdownTrigger >
                                <Button variant="light" className={`w-full justify-start bg-[rgba(217,217,217,0.07)] text-[#C6BECF] ${dropdownInErrorState ? "bg-danger-50" : ""}`} >
                                    {selectedOptionsStr}
                                </Button>
                            </DropdownTrigger>
                            {dropdownInErrorState ? <p className="text-danger text-tiny">{"Please select at least one option."}</p> : null}
                            {otherWasClicked ?
                                <Textarea
                                    variant="bordered" label="Please describe what you are reaching out about" labelPlacement="outside" placeholder="Enter your message"
                                    name="message"
                                    isRequired
                                    onBlur={() => setClickedOutOfMessage(true)}

                                    classNames={{
                                        label: "text-md !text-[#C6BECF] pt-5 ",
                                        inputWrapper: `
                                            border-none
                                            !bg-[rgba(217,217,217,0.07)] 
                                            md:rounded-2xl 
                                            rounded-none 
                                            focus-within:!bg-[rgba(217,217,217,0.07)] 
                                            data-[error=true]:!bg-[rgba(217,217,217,0.07)]
                                            `,
                                        input: "!text-[#C6BECF]"
                                    }}
                                    validate={(value) => {
                                        if (value.length === 0 && clickedOutOfMessage) {
                                            return "Please enter a message"
                                        }
                                    }}
                                />
                                : null
                            }
                        </div>

                        <DropdownMenu closeOnSelect={false} selectedKeys={selectedDropdownKeys} selectionMode="multiple" aria-label="Static Actions" onSelectionChange={handleSelectionChange}>
                            <DropdownItem key="debugging-support">Debugging Support</DropdownItem>
                            <DropdownItem key="edit-file">Website Inquiries</DropdownItem>
                            <DropdownItem key="other">Other</DropdownItem>
                            {/* <DropdownItem key="delete-file" className="text-danger" color="danger">Delete file</DropdownItem> */}
                        </DropdownMenu>
                    </Dropdown>

                    <Textarea
                        variant="bordered" 
                        classNames={{
                            label: "text-md !text-[#C6BECF]",
                            inputWrapper: `
                                border-none
                                !bg-[rgba(217,217,217,0.07)] 
                                md:rounded-2xl 
                                rounded-none 
                                focus-within:!bg-[rgba(217,217,217,0.07)] 
                                data-[error=true]:!bg-[rgba(217,217,217,0.07)]
                                `,
                            input: "!text-[#C6BECF]"
                        }}
                        radius="none"
                        label="Message"
                        labelPlacement="outside"
                        placeholder="Enter your message"
                        name="message"
                        isRequired
                        onValueChange={setmessageInput}
                        onBlur={() => setClickedOutOfMessage(true)}
                        validate={(value) => {
                            if (value.length === 0 && clickedOutOfMessage) {
                                return "Please enter a message";
                            }
                        }}
                    />


                    <div className="w-full flex flex-col items-center ">
                   
                        {(formWasSubmitted && emailWasSent) ? <p>Thanks! I will reach out as soon as possible.</p>
                            : 
                            <Button isDisabled={submitButtonDisabled}
                                className="
                                disabled:cursor-auto
                                disabled:text-gray-600
                                disabled:opacity-50
                                disabled:hover-none
                                disabled:hover:bg-same-color
                                bg-[rgba(217,217,217,0.07)]
                                text-[#C6BECF]
                                "
                                type="submit"
                                onPress={() => { handleSubmit }}
                            >Submit
                            </Button>
                            
                            }
                            {emailInErrorState && (
                                 <p className="text-red-500 
                                 mt-2 
                                 md:mt-5  
                                 text-justify
                                 md:text-center
                                 lg:text-lg 
                                 xl:text-xl
                                 "> Hmm.. something went wrong. Please check your internet connection and try again. </p>
                                        
                            )}
                    </div>
                </Form>
            </div>
        )
    }
