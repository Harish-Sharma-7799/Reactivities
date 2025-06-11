using System;
using Application.Activities.Commands;
using Application.Activities.DTOs;
using FluentValidation;

namespace Application.Validators;

public class EditActvityValidator : BaseActivityValidator<EditActivity.Command, EditActivityDto>
{
    public EditActvityValidator() : base(x => x.ActivityDto)
    {
        RuleFor(x => x.ActivityDto.Id)
            .NotEmpty().WithMessage("Id is required");

    }
}
