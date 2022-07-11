<template>
    <div>
        <b-form>

            <section class=" mb-4 pb-2 border-bottom border-secondary">
                <b-row>
                    <b-col cols="4">
                        <h6>Photograph</h6>
                    </b-col>
                    <b-col>

                        <b-form-group label="Provided photograph:">
                            <p>Image here</p>
                        </b-form-group>

                    </b-col>
                </b-row>
            </section>

            <section class=" mb-4 pb-2 border-bottom border-secondary">
                <b-row>
                    <b-col cols="4">
                        <h6>Signature</h6>

                    </b-col>
                    <b-col>


                        <b-form-group label="Provided Signature:">
                            <img src="~/assets/img/pph_signature.png" style="max-width: 100%" />
                        </b-form-group>
                    </b-col>
                </b-row>
            </section>


            <section class=" mb-4 pb-2 ">
                <b-row>
                    <b-col cols="4">
                        <h6>Declaration</h6>
                        <p>
                            Please read and answer the declaration carefully.
                        </p>

                    </b-col>
                    <b-col>

                        1. The photograph above is a true photograph of the proposed permit holder. 
2.  
3. The other signed document(s) shown to me by the proposed permit holder were: [text box]

                        <div>
                            <p>
                                I, <br>James Paul Roberts
                                <br>positionName<br>Of orgName, branch, full streetAddress
                            </p>


                            <p>Declare that:</p>
                            <ol>
                                <li>The photograph above is a true photograph of the proposed permit holder.</li>
                                <li>I have compared the signature above to the signatures in one or more other signed documents shown to me by the proposed permit holder, and I believe the signature on this form to be a true signature of the proposed permit holder.</li>
                                <li>The other signed document(s) shown to me by the proposed permit holder were: [Free
                                    text box to describe document containing signature] (Add radio button at the bottom
                                    for the Com member to confirm their declaration)</li>
                            </ol>
                            
                           
                        </div>
                        <b-form-group label="The other signed document(s) shown to me by the proposed permit holder were:">
                            <b-form-textarea v-model="form.committeeMember.dec.viewedDocs"></b-form-textarea>
                        </b-form-group>
                        <b-form-group>
                            <b-form-checkbox v-model="form.permitHolder.confirmPhotoSignatureDeclaration" :value="true"
                                :unchecked-value="false">
                                I Confirm
                            </b-form-checkbox>
                        </b-form-group>

                    </b-col>
                </b-row>
            </section>


        </b-form>
    </div>
</template>

<script>

import entity from "../../common/entity.vue";
import EntityAddress from "../../common/entityAddress.vue";
import Notice from "../../common/notice.vue";
import f42Training from "../common/f42Training.vue";
import f42HolderSuperDetails from "../common/f42HolderSuperDetails.vue";
import f42HolderDetailsComp from "../common/f42HolderDetailsComp.vue";
export default {
    components: { entity, Notice, EntityAddress, f42Training, f42HolderSuperDetails, f42HolderDetailsComp },
    name: "f42MemberViewPhotoSignature",
    props: {
        form: {
            type: Object,
            default: () => ({}),
        },
    },
    data() {
        return {
            boolOptions: [
                { text: "Yes", value: true },
                { text: "No", value: false },
            ],
        };
    },
    computed: {
        youString: function () {
            return this.form.repType === "self" ? "you" : "the Applicant";
        },
        yourString: function () {
            return this.form.repType === "self" ? "your" : "the Applicant's";
        },
        AreYouString: function () {
            return this.form.repType === "self" ? "are you" : "is the Applicant";
        },
        DoYouString: function () {
            return this.form.repType === "self" ? "do you" : "is the Applicant";
        },
        DoYouStringCont: function () {
            return this.form.repType === "self" ? "do you" : "does the Applicant";
        },
        youAreString: function () {
            return this.form.repType === "self" ? "you are" : "the Applicant is";
        },
        wereYouString: function () {
            return this.form.repType === "self" ? "were you" : "was the Applicant";
        },
        AreYouString: function () {
            return this.form.repType === "self" ? "are you" : "the Applicant is";
        },
    },
    methods: {


    },
};
</script>

<style lang="scss" scoped>
h6::first-letter {
    text-transform: uppercase;
}
</style>
