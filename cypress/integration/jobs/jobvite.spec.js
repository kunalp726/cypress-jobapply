context('Actions', () => {
    beforeEach(() => {
        cy.visit('https://boards.greenhouse.io/instabase/jobs/4023822002?gh_src=323d01a62')
        // cy.visit('https://boards.greenhouse.io/postmates/jobs/1486672?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic')
    })
    it('.type() - type into a DOM element', () => {
        cy.get("#first_name").type("Kunal");
        cy.get("#last_name").type("pavashiya");
        cy.get("#email").type("kunal.pavashiya@sjsu.edu");
        cy.get("#phone").type("6692610560");
        cy.get("a[data-source=paste]:first").click();
        cy.get("#job_application_answers_attributes_0_text_value").type("https://www.linkedin.com/in/kunalpavashiya/");
        cy.get("#job_application_answers_attributes_2_text_value").type("Linkedin");
        cy.get("#job_application_answers_attributes_3_text_value").type(" https://github.com/kunalp726");

        cy.get("#job_application_answers_attributes_4_boolean_value").select("Yes");
        // cy.contains("option","Yes").click();

        cy.get("#job_application_answers_attributes_5_boolean_value").select("Yes");
        // cy.contains("option","Yes").click();

        cy.get("#job_application_gender").select("Male");
        cy.get("#job_application_hispanic_ethnicity").select("No");
        cy.get("#job_application_veteran_status").select("I am not a protected veteran");
        cy.get("#job_application_disability_status").select("No, I don't have a disability");
        // cy.contains("option","Male").click();
    });
});