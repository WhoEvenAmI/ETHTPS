﻿using System;
using System.Collections.Generic;
using ETHTPS.Data.Database;

namespace ETHTPS.Data.Database;

public partial class Experiment
{
    public int Id { get; set; }

    public int ProjectId { get; set; }

    public string Name { get; set; }

    public string Description { get; set; }

    public int Target { get; set; }

    public int RunParameters { get; set; }

    public virtual ICollection<ApikeyExperimentBinding> ApikeyExperimentBindings { get; } = new List<ApikeyExperimentBinding>();

    public virtual ICollection<ExperimentResult> ExperimentResults { get; } = new List<ExperimentResult>();

    public virtual ExperimentalSession ExperimentalSession { get; set; }

    public virtual Provider Project { get; set; }

    public virtual ExperimentRunParameter RunParametersNavigation { get; set; }

    public virtual ExperimentTarget TargetNavigation { get; set; }
}