import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import type { RootState } from '..'

import { Sex } from '../../shared/types'
import {
    Advantage,
    CheckboxOption,
    FormData,
    RadioOption,
} from '../../shared/types/formDataTypes'

export interface FormState {
    isFormStarted: boolean
    activeStep: number
    steps: string[]

    formData: FormData
}

const initialState: FormState = {
    isFormStarted: false,
    activeStep: 0,
    steps: ['Credentials', 'Advantages', 'About'],

    formData: {
        homeInfo: {
            phoneNumber: '',
            email: '',
        },
        stepOne: {
            nickname: '',
            name: '',
            surname: '',
            sex: 'man',
        },
        stepTwo: {
            advantages: [],
            checkboxesOptions: [],
            radioOptions: [],
        },
        stepThree: {
            aboutTextValue: '',
        },
    },
}

export const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        setIsFormStarted: (state, action: PayloadAction<boolean>) => {
            state.isFormStarted = action.payload
        },
        setActiveStep: (state, action: PayloadAction<number>) => {
            state.activeStep = action.payload
        },
        setPhoneNumber: (state, action: PayloadAction<string>) => {
            state.formData.homeInfo.phoneNumber = action.payload
        },
        setEmail: (state, action: PayloadAction<string>) => {
            state.formData.homeInfo.email = action.payload
        },
        setName: (state, action: PayloadAction<string>) => {
            state.formData.stepOne.name = action.payload
        },
        setNickname: (state, action: PayloadAction<string>) => {
            state.formData.stepOne.nickname = action.payload
        },
        setSurname: (state, action: PayloadAction<string>) => {
            state.formData.stepOne.surname = action.payload
        },
        setSex: (state, action: PayloadAction<Sex>) => {
            state.formData.stepOne.sex = action.payload
        },
        setAdvantages: (state, action: PayloadAction<Advantage[]>) => {
            state.formData.stepTwo.advantages = action.payload
        },
        addNewAdvantage: (state, action: PayloadAction<Advantage>) => {
            state.formData.stepTwo.advantages?.push(action.payload)
        },
        changeAdvantageText(state, action: PayloadAction<Advantage>) {
            const { advantages } = state.formData.stepTwo
            const { id, text } = action.payload
            if (!advantages) {
                return
            }

            const advantageIndex = advantages.findIndex(
                (advantage) => advantage.id === id,
            )
            if (advantageIndex !== -1) {
                advantages[advantageIndex] = {
                    ...advantages[advantageIndex],
                    text,
                }
            }
        },
        deleteAdvantage: (state, action: PayloadAction<{ id: string }>) => {
            const { advantages } = state.formData.stepTwo
            const { id } = action.payload
            if (!advantages) {
                return
            }

            const advantageIndex = advantages.findIndex(
                (advantage) => advantage.id === id,
            )
            if (advantageIndex !== -1) {
                advantages.splice(advantageIndex, 1)
            }
        },
        // setChechboxes: (state, action: PayloadAction<CheckboxOption[]>) => {
        //   state.formData.stepTwo.checkboxesOptions = action.payload;
        // },
        // changeCheckbox: (state, action: PayloadAction<{ id: string }>) => {
        //   const { id } = action.payload;
        //   const { checkboxesOptions } = state.formData.stepTwo;
        //   if (!checkboxesOptions) {
        //     return;
        //   }
        //   const checkbox = state.formData.stepTwo.checkboxesOptions.find(
        //     (checkbox) => checkbox.id === id,
        //   );

        //   if (checkbox) {
        //     checkbox.checked = !checkbox.checked;
        //   }
        //   // const checkboxIndex = checkboxesOptions.findIndex((checkbox) => checkbox.id === id);
        //   // if (checkboxIndex !== -1) {
        //   //   checkboxesOptions[checkboxIndex].checked = !checkboxesOptions[checkboxIndex].checked;
        //   // }
        // },
        changeCheckbox: (state, action: PayloadAction<CheckboxOption>) => {
            const updatedCheckbox = action.payload
            const existingCheckboxIndex =
                state.formData.stepTwo.checkboxesOptions.findIndex(
                    (checkbox) => checkbox.id === updatedCheckbox.id,
                )

            if (existingCheckboxIndex !== -1) {
                state.formData.stepTwo.checkboxesOptions[
                    existingCheckboxIndex
                ] = updatedCheckbox
            } else {
                state.formData.stepTwo.checkboxesOptions.push(updatedCheckbox)
            }
        },
        changeRadio: (state, action: PayloadAction<RadioOption>) => {
            state.formData.stepTwo.radioOptions = [action.payload]
        },
        setAboutText: (state, action: PayloadAction<string>) => {
            state.formData.stepThree.aboutTextValue = action.payload
        },
    },
})

// control the steps
export const selectIsFormStarted = ({ formReducer }: RootState) =>
    formReducer.isFormStarted
export const selectSteps = ({ formReducer }: RootState) => formReducer.steps
export const selectActiveStep = ({ formReducer }: RootState) =>
    formReducer.activeStep

// form data
export const selectPhone = ({ formReducer }: RootState) =>
    formReducer.formData.homeInfo.phoneNumber
export const selectEmail = ({ formReducer }: RootState) =>
    formReducer.formData.homeInfo.email

export const selectNickname = ({ formReducer }: RootState) =>
    formReducer.formData.stepOne.nickname
export const selectName = ({ formReducer }: RootState) =>
    formReducer.formData.stepOne.name
export const selectSurname = ({ formReducer }: RootState) =>
    formReducer.formData.stepOne.surname
export const selectSex = ({ formReducer }: RootState) =>
    formReducer.formData.stepOne.sex

export const selectAdvantages = ({ formReducer }: RootState) =>
    formReducer.formData.stepTwo.advantages
export const selectCheckboxesOptions = ({ formReducer }: RootState) =>
    formReducer.formData.stepTwo.checkboxesOptions
export const selectCheckboxById = (state: RootState, checkboxId: string) =>
    state.formReducer.formData.stepTwo.checkboxesOptions.find(
        (checkbox) => checkbox.id === checkboxId,
    )
export const selectRadioOptions = ({ formReducer }: RootState) =>
    formReducer.formData.stepTwo.radioOptions

export const selectAboutText = ({ formReducer }: RootState) =>
    formReducer.formData.stepThree.aboutTextValue

export const selectFormData = ({ formReducer }: RootState) =>
    formReducer.formData

export const { actions: formActions } = formSlice
export const { reducer: formReducer } = formSlice

export default formSlice.reducer
