import React, { useActionState } from "react";

type ActionState = {
  message: string;
  success: boolean;
};

async function submitUsername(
  prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  const username = formData.get("username") as string;

  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1500));

  if (!username || username.length < 3) {
    return {
      success: false,
      message: "Username must be at least 3 characters long",
    };
  }

  return {
    success: true,
    message: `Welcome, ${username}!`,
  };
}

const initialState: ActionState = {
  success: false,
  message: "",
};

export default function UseActionStateExample() {
  const [state, formAction, isPending] = useActionState(
    submitUsername,
    initialState
  );

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="card shadow-sm">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">
                Register
              </h2>

              <form action={formAction}>
                <div className="mb-3">
                  <label
                    htmlFor="username"
                    className="form-label"
                  >
                    Username
                  </label>
                  <input
                    id="username"
                    type="text"
                    name="username"
                    className="form-control"
                    placeholder="Enter username"
                    disabled={isPending}
                  />
                </div>

                <div className="d-grid">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={isPending}
                  >
                    {isPending && (
                      <span
                        className="spinner-border spinner-border-sm me-2"
                        role="status"
                        aria-hidden="true"
                      />
                    )}
                    {isPending ? "Submitting..." : "Submit"}
                  </button>
                </div>

                {state.message && (
                  <div
                    className={`alert mt-3 ${
                      state.success
                        ? "alert-success"
                        : "alert-danger"
                    }`}
                    role="alert"
                  >
                    {state.message}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
